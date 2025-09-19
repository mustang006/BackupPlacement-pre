const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    setTimeout(() => {
      resolve("operation succeded");
    }, 1000);
  } else {
    reject("operation not succeded");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
