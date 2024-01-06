const promiseOne = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ username: "Rohit" });
  } else {
    reject("Error: We got an Error!");
  }
});

promiseOne
  .then((user) => {
    console.log(user, "user data");
    return user;
  })
  .catch(function (error) {
    console.log(error);
  });

const promiseFive = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data, "data in promise five");
  } catch (err) {
    console.log(err, "We got an Error");
  }
};

promiseFive();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data, "data we get in fetch");
  })
  .catch(function (err) {
    console.log(err);
  });
