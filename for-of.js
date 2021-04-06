function multi(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

const num = [1, 2, 3];
// num.forEach(async (ele) => {
//   const res = await multi(ele);
//   console.log("res", res);
// });

!(async function () {
  for (let i = 0; i < num.length; i++) {
    const res = await multi(num[i]);
    console.log("res1", res);
  }
})();

!(async function () {
  for (let i in num) {
    const res = await multi(num[i]);
    console.log("res", res);
  }
})();
// for (let item of num) {
//   const res = await multi(num[i]);
//   console.log("res", res);
// }
