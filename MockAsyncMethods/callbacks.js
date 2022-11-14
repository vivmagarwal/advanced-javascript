import { fetchUsers, fetchPosts, fetchComments } from "./blogDataPromises";

// Dummy callbacks;
export function fetchUsersCB(cb) {
  fetchUsers()
    .then((data) => cb(null, data))
    .catch((err) => cb(err, null));
}

export function fetchPostsCB(userId, cb) {
  fetchPosts(userId)
    .then((data) => cb(null, data))
    .catch((err) => cb(err, null));
}

export function fetchCommentsCB(postId, cb) {
  fetchComments(postId)
    .then((data) => cb(null, data))
    .catch((err) => cb(err, null));
}

export function asyncSqrt(num, cb) {
  setTimeout(() => {
    if (num < 0) {
      cb(new Error("Not possible to perform sqrt operatio with a negative number"), null);
    } else {
      cb(null, Math.sqrt(num));
    }
  }, Math.random() * 500);
}

export function asyncSqrt2(num, resultCb, errCb) {
  setTimeout(() => {
    if (num < 0) {
      errCb(new Error("Not possible to perform sqrt operatio with a negative number"));
    } else {
      resultCb(Math.sqrt(num));
    }
  }, Math.random() * 500);
}
