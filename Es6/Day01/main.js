// var fname = "mona";
// console.log(window.fname);

// function test() {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   console.log("i outside loop : ", i);
// }

// test();
// const arr = [1, 2, 3];

// arr = [];

// const PI = 3.14

// function test() {
//   let test = "ali";
//   for (let i = 0; i < 3; i++) {
//     console.log(object)
//     console.log(i);
//   }
//   console.log("i outside loop :", i);
// }

// test();

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let a = 3;

// let b = a;

// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);

// var arr1 = [1, 2, 3, "new value"];
// var arr2 = [...arr1];

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// var arr = [20, 10, 30, 12];
// console.log(Math.max(...arr));

// let person1 = {
//   fname: "ali",
//   lname: "ahmed",
//   age: 20,
// };

// let person2 = { id: 1, ...person1, color: "red" };

// console.log("Person1 :", person1);
// console.log("Person2 :", person2);

// var arr1 = [10, 20];
// var arr2 = ["ali", ...arr1, "mona"];

// function sayHello(a, ...rest) {
//   console.log(rest);
//   console.log(arguments);
// }

// sayHello("12", 10, true);
// var emojo = ":)";
// var startStr = "            ALI";
// console.log(`${startStr.trim()} Hello from iti ${emojo} ${emojo}`);

// let arr = [10, 20, "ali"];

// let [, , z] = arr;

// console.log(z);

// let person = {
//   fname: "ali",
//   age: 30,
//   color: "red",
// };

// let {  color } = person;

// console.log(fname, color);

// function useArr() {
//   return [0, function () {}];
// }

// let [x, y] = useArr();

/**Object features */

// let person = {
//   fname: "Ali",
//   display: function () {
//     console.log(person.fname);
//   },
// };

// let { display } = person;

// display();

// var myKey = "color";

// let person = {
//   fname: "ali",
//   age: 20,
//   color: "red",
// };

// for (var key in person) {
//   console.log(person[key]);
// }

// console.log(person[myKey]);

// console.log(person.display());

// (function (fname) {
//   console.log("Called", fname);
// })("mona");

// var add = (a, b) => a + b;

// var result = add(2, 3);
// console.log(result);
// var fname = "mona";

// // this ==> window
// let person = {
//   fname: "ali",
//   display: function () {
//     // this ... person
//     setTimeout(() => {
//       console.log(this.fname);
//     }, 2000);
//   },
// };

// person.display();
