// const create = () => {
//   const a = 100;
//   return function () {
//     console.log(a);
//   };
// };

// const a = 200;
// const fn = create(a);
// fn();

// function create(fn) {
//   const a = 200;
//   fn();
// }
// const a = 100;
// function fn() {
//   console.log(a);
// }

// create(fn);

// 闭包应用

// 使用闭包进行数据管理
// function createCache() {
//   const data = {
//     set: function (key, val) {
//       data[key] = val;
//     },
//     get: function (key) {
//       return data[key];
//     },
//   };
// }

const getAdd = (function () {
  let index = 1;
  return function () {
    index++;
    console.log("index", index);
    return index;
  };
})();

(async function () {
  for (let i = 0; i < 5; i++) {
    const add = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          getAdd();
          resolve();
        }, 1000);
      });
    await add();
  }
})();
