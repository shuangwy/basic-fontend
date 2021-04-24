// let i, a;
// for (a = 0; i < 10; i++) {
//   a = document.createElement("a");
//   a.innerHTML = i + "</br>";
//   a.addEventListener("click", (e) => {
//     console.log(i, e);
//   });
// }
// document.body.appendChild(a);

// this 的取值 是在函数执行的时候确定，而不是定义的时候确定

// const obj = { a: 1, b: 2, c: 3 };
// const obj1 = Object.assign(obj, { d: 3 }, { e: 8 }, { j: { h: 90 } });
// console.log("obj", obj, obj1);

// const user = {
//   count: 1,
//   getCount: function () {
//     return this.count;
//   },
// };

// console.log(111, user.getCount());

// let i = 10;
// const animate = () => {
//   i = i + 1;
//   if (i < 100) {
//     window.requestAnimationFrame(animate);
//   }
// };
// animate();

for (let row = 1; row < 10; row++) {
  for (let column = 1; column <= row; column++) {
    document.write(
      `${row}*${column}=${row * column} &nbsp&nbsp&nbsp&nbsp&nbsp`
    );
  }
  document.write("<br/>");
}
