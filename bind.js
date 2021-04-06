// Function.prototype.myBind = function (context, ...args) {
//   let self = this;
//   const fn = function () {
//     return self.apply(this instanceof fn ? this : context, window || args);
//   };
//   fn.prototype = Object.assign(this.prototype);
//   return fn;
// };

function fn() {
  console.log("this", this, ...arguments);
}
Function.prototype.myBind = function () {
  const arg = Array.prototype.slice.call(arguments);
  const context = arg.shift();
  const self = this;
  return function () {
    return self.apply(context, arg);
  };
};
const fn1 = fn.myBind({ a: 1 }, 10, 20, 30);
fn1();
