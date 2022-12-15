// A promise is an object that represents an eventual completion or failure of a block of code. Think of real-life promise where you promise someone to do something.

// Syntax

// A new promise object takes a function (aka an 'executor') that executes immediately. Usually, this function takes time to run. We can then use the resolve and reject functions (which are built-in JavaScript functions) which either resolves or rejects the promise.
let promise = new Promise((resolve, reject) => {
  const result = 1 + 4;
  if (result === 3) {
    resolve("Quick maths");
  } else {
    reject("Not Quick maths");
  }
});

// Afterwards, we can run some logic depending on the outcome of the promise. If the promise is successful, then we could use the 'then' method to run the logic when the promise is resolved. Otherwise, we could use the 'catch' to run some logic when the promised is rejected.
promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// Async/Await is a cleaner way of chaining promises together. It makes asynchronous function calls look synchronous, in terms of structure. the 'async' keyword ensures that the function returns a promise. 'await' waits for the promise to be resolved and then return the result.

async function add() {
  let result = 1 + 1;
  let value = await result;

  console.log(value);
}

add();

// What if we wanted to handle errors, like how we used the .catch() method? We could use the try, catch block inside the body of the async function

async function add() {
  try {
    let result = 1 + 1;
    if (result === 2) {
      let value = await result;
      console.log(value);
    }
  } catch (error) {
    console.log(error);
  }
}

add();
