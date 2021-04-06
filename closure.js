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
function createCache() {
  const data = {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
}
