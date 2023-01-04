// import fetch from 'isomorphic-fetch';
import data from "../../submissionData.json";
import "cypress-localstorage-commands";
import todosData from "../fixtures/todosData.json";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];
let t = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjcwNzI4ODg1LCJleHAiOjE2NzA3Mzk2ODV9.fFL7sflnhLs0C0cj4c8EgsTeJHu3Sh9u80cLFgMwPm0",
  user: {
    id: 1,
    username: "admin",
    firstname: "Ad",
    lastname: "Minister",
    email: "admin@mail.com",
    password: "$2b$10$lLm5Lp40uBR9CUrZn58CdOl8yu5Gp2umAO.6ly.vWcZ0a0vUKsHiC",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
    userLevel: 4,
    createdAt: 1670165980638,
  },
}; 
data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    before(() => {
      cy.setLocalStorage("userId", null);
      cy.setLocalStorage("localAccessToken", null);
    });

    beforeEach(() => {
      cy.restoreLocalStorage();
    })

    afterEach(() => {
      cy.saveLocalStorage();
    });


    it("Check if a user is able to log in & set local storage", () => {
      cy.intercept("POST", `**/user/login`, (req) => {
        req.reply({
          body: t,
        });
      }).as("login");
      cy.visit(url);
      cy.get("#login-user-username").clear().type("admin");
      cy.get("#login-user-passowrd").clear().type("admin");
      cy.get("#login-user").click();
      cy.wait("@login").then((data) => {
        expect(data.response.statusCode).to.eq(200);
        cy.saveLocalStorage();

        // cy.getLocalStorage("localAccessToken").then((access_token) => {          
        //   expect(access_token).to.eq(t.accessToken);
        //   acc_score += 1;
        // });

        acc_score += 1;
      });
    }); // 1

    it(`Check if keys in local storage are set`, () => {
      expect(+localStorage.getItem("userId")).to.eq(+t.user.id);
      expect(localStorage.getItem("localAccessToken")).to.eq(t.accessToken);
      acc_score += 1;
    }); // 1

    it(`Check if notification is rendered after logging in`, () => {
      cy.get("#notifications-wrapper")
        .contains(`hey admin, welcome back!`)
        .then(() => {
          acc_score += 2;
        });
    }); //2

    it(`Check if authenticated fetch request is made and todos are being displayed`, () => {
      cy.intercept("GET", `**/todos?**`, (req) => {
        req.reply({
          fixture: "todosData.json",
        });
      }).as("todos");
      cy.get("#fetch-todos").click();
      cy.wait("@todos").then((data) => {
        acc_score += 1;
        cy.get(".todo-list-wrapper")
          .children()
          .should("have.length", data.response.body.length)
          .then(() => {
            acc_score += 1;
          });
      });
    }); // 2

    it(`Check markup of individual todo item`, () => {
      cy.get(`#todo-list-wrapper input[type="checkbox"]`).should(
        "have.length",
        todosData.length
      );
      cy.get(`#todo-list-wrapper label`).should(
        "have.length",
        todosData.length
      );
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it(`Check if toggle of completed is persisted in DB`, () => {
      cy.intercept("PATCH", "**/todos/**").as("updateTodo");
      cy.get(`#todo-list-wrapper label input[type="checkbox"]`)
        .eq(0)
        .should("not.be.checked");
      cy.get(`#todo-list-wrapper label input[type="checkbox"]`)
        .eq(2)
        .should("be.checked");
      cy.get(`#todo-list-wrapper label input[type="checkbox"]`).eq(0).check();
      cy.wait("@updateTodo").then(() => {
        cy.get(`#todo-list-wrapper label input[type="checkbox"]`)
          .eq(0)
          .should("be.checked");
        acc_score += 1;
      });
      cy.get(`#todo-list-wrapper label input[type="checkbox"]`).eq(2).uncheck();
      cy.wait("@updateTodo").then(() => {
        cy.get(`#todo-list-wrapper label input[type="checkbox"]`)
          .eq(2)
          .should("not.be.checked");
        acc_score += 1;
      });
    }); //2
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
