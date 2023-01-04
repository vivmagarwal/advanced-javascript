// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipesURL = `${baseServerURL}/recipeIngredients?_limit=10&_page=2`
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

let getTodoButton = document.getElementById("fetch-todos");
let getEmployeesButton = document.getElementById("fetch-employees");
let getRecipesButton = document.getElementById("fetch-recipes");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

getRecipesButton.addEventListener("click", () => {



  fetch(recipesURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let cardData = data.map(item => {
        return {
          title: item.name,
          description: item.description ? item.description.substring(0,100) : "No description available.",
          linkText: 'Read more',
          linkUrl: 'https://google.com',
          imageUrl: `${baseServerURL}${item.image}`,
        }
      })


      // array of objects
      // title, desc, linkText, linkUrl, imageUrl
      renderCards(cardData)

      // what we need - declarative approach
      // mainSection.innerHTML = `
      //   <pre class="emp-wrapper">  
      //     <h3>List of employees</h3>
      //     <code>
      //       ${JSON.stringify(data, null, 5)}
      //     </code>
      //   </pre>
      // `;

      // giving JS step by step instructions - imperative approach

      // let dataPre = document.createElement('pre');
      // dataPre.classList.add("emp-wrapper")

      // let dataCode = document.createElement('code');
      // dataCode.append(JSON.stringify(data,null,2))

      // dataPre.append(dataCode);
      // mainSection.append(dataPre);
    });
});

// 1. every thing static in html file

// 2. data = static in js
// dom = coming from the static data

// 3. can data be dynamic?

let cardData = [
  {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deleniti incidunt rem. Voluptate, tempore quos, suscipit temporibus autem sapiente.',
    linkText: 'Read more',
    linkUrl: 'https://google.com',
    imageUrl: 'http://localhost:9090/images/meals/adxcbq1619787919.jpg',
  },
  {
    title: 'Title2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deleniti incidunt rem. Voluptate, tempore quos, suscipit temporibus autem sapiente.',
    linkText: 'Read more',
    linkUrl: 'https://google.com',
    imageUrl: 'http://localhost:9090/images/meals/adxcbq1619787919.jpg',
  },
  {
    title: 'Title3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deleniti incidunt rem. Voluptate, tempore quos, suscipit temporibus autem sapiente.',
    linkText: 'Read more',
    linkUrl: 'https://google.com',
    imageUrl: 'http://localhost:9090/images/meals/adxcbq1619787919.jpg',
  }
]

// array of objects
// title, desc, linkText, linkUrl, imageUrl
function renderCards(cardData) {

  let cardList = `
    <div class="card-list">
      ${ cardData.map(item => getCard(item.title, item.description, item.linkText, item.linkUrl, item.imageUrl)).join('') }
    </div>
  `

  mainSection.innerHTML = cardList;
}

function getCard(title, desc, linkText, linkUrl, imageUrl){
  let card = `
      <div class="card">
        <div class="card__img">
        <img src=${imageUrl} alt="food" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${title}</h3>
          <div class="card__item card__description">
            ${desc}
          </div>
          <a href=${linkUrl} class="card__item card__link">${linkText}</a>
        </div>
      </div>
  `
  return card
}