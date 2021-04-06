// const age = 17;

// const obj = {
//   name: "小张",
//   objAge: 20,
//   myFun: () => {
//     console.log(111, this.name + this.age);
//   },
// };

var name = "小王";

shows = () => {
  const name = "小张";
  console.log("show", this.name);
  return this;
};
shows();
