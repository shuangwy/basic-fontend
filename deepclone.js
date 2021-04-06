function Person() {
  this.name = "zhangsan";
  this.age = 20;
}

function Student() {
  this.color = "red";
}
Student.prototype = new Person();
const p1 = new Student();

console.log(p1.name, p1.hasOwnProperty("age"), p1.hasOwnProperty("color"));
