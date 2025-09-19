const promis = new Promise((resolve, reject) => {
  const apidata = { name: "abhishek", city: "indore" };
  const serverStatus = 400;
  if ((serverStatus ==400)) {
    resolve(apidata);
  } else {
    reject("somthing went wrong");
  }
});

promis
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
