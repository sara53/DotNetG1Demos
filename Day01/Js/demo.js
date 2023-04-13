// var fname = "ali"; // string

// fname = 10; // reassign
// console.log(typeof fname);
// console.log(fname);
// var fname = 10; // redeclaration

// console.log(typeof fname);
/**
 * primitve datatype VS Refence Datatype
 * ====================================
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 * (symbol) in es6
 *
 */
// var fname;
// fname = 10;
// console.log(typeof fname);
// var fname = null;
// console.log(typeof fname);
/**
 *  == (+) number + number == add
 *  == (+) string + string == concat
 */

/** coercion --> convert from datatype to anther datatype autmo.. */
// var a = "mona";
// var b = 10;
// console.log(b + a);

// var fname = 3;
// var fname = String(3);

// console.log(typeof fname);

// var num = 10;
// var num = Number("true");
// console.log(num);

/*** falsy Values
 * 0
 * false
 * undefined
 * null
 * ""
 * NaN
 */
// var flag = false;

// var flag = Boolean("ffo");
// console.log(flag);
/**
 * (==)  -- [values only]
 * (===) -- [Values & Datatype]
 */

// var a = "true"; // NaN
// var b = true; // 1

// console.log(a == b);
/**
 * &&
 *
 *   true && true ==> true
 *   true && false ==> false
 *   false && true ==> false
 *   false && false ==> false
 * ||
 *
 * true || true => true
 * true || false => true
 * false || true => true
 * false || false => false
 *
 */

// 1 > 2 && 3 > 2;

// "mona" && "ali";
// true && true ==> "ali"
//

// // var a = 5;
// // a == 3 ? console.log("ali") : console.log("Alaa");

// var fname = "Hello from iti ";

// var i = 0;
// while (choose === 'yes') {
//   console.log(fname[i]);
//   i++;
// }
// for (var i = 0; i < fname.length; i++) {
//   console.log(fname[i]);
// }

// console.log(fname.length);

// var result = prompt("Enter your name");

// // alert("item deleted")

// while (!isNaN(result)) {
//   alert("you entered a number , please enter a valid name");
//   result = prompt("Enter name");
// }

// console.log(result);
var i = 3;

for (var i = 1; i < 7; i++) {
  document.writeln("<h" + i + ">Hello Dot Net Group<h" + i + "/>");
}
// var result = confirm("are you sure you want to delete this item");
// result ? console.log("Item Deleted") : console.log("operation canceled");
