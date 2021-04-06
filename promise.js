// Promise.resolve()
//   .then(() => {
//     console.log("1");
//   })
//   .catch(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//     throw new Error("error");
//   })
//   .catch(() => {
//     console.log(2);
//     // throw new Error("error");
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .catch(() => {
//     console.log(4);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log("1");
//     throw new Error("error");
//   })
//   .catch(() => {
//     console.log(2);
//   })
//   .catch(() => {
//     console.log(3);
//   });

// async function fn() {
//   return 100;
// }

// (async function async2() {
//   const a = fn();
//   const b = await fn();
// })();

// (async function () {
//   console.log("start");
//   const a = await 100;
//   console.log("a", a);
//   const b = await Promise.resolve(200);
//   console.log("b", b);
//   const c = await Promise.reject(300);
//   console.log("c", c);
//   console.log("end");
// })();

// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// setTimeout(() => {
//   console.log("setTimeOut");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");

console.log("1", 1);
setTimeout(() => {
  console.log("2", 2);
});

let flag = true;
new Promise((resolve, reject) => {
  console.log("3", 3);
  resolve(4);
  //   reject(6);
})
  .catch((n) => {
    console.log(`${n}`, n);
    throw new Error(7);
  })
  .then((r) => {
    console.log(`${r}`, 222, r);
  });
console.log("5", 5);
