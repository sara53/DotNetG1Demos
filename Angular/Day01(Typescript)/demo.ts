// let fname = "mona"; // string

// fname = "ali";

// fname = "akom";
// console.log(fname);

// let num = 10;

// num = 11;

// num = false;

// console.log(num);
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 *
 */

// let fname: any = true;

// fname = 10;

// fname = "string";

// let fname: string;

// fname = "mona";

// console.log(fname);

// type x = string | number | boolean;

// let fname: x = 20;
// let lname: x = 20;

// fname = "mona";
// fname = 17;

// fname = true;

/**
 * Intro angular
 * SPA VS MPA
 * Component
 * Installation
 * Type In typescripe
 * union type |
 * type
 * -------------------------
 *  array
 *  tuble
 *  object
 *  function
 *  classes
 *  interface
 *  inhertance
 */

// let arr: string[] = [];

// arr = "mona"; // string

// console.log(arr);

// let person: { id: number; fname: string } = { id: 124, fname: "mona" };

// person.fname = "ahmed"; // set
// person.color = "truw";
// person = { id: 44, fname: "ahmed" };

// type customObject = { id: number; productName: string; price: number };

// let products: customObject[] = [
//   {
//     id: 1,
//     productName: "sumsung",
//     price: 200,
//   },
//   {
//     id: 12,
//     productName: "sumsung",
//     price: 200,
//   },
// ];

// tuble
// let arr: [string, number] = ["mona", 123];

// function display(x: string, y: number = 0): void {
//   console.log(x);
//   console.log(y);
// }

// display("mona");
// interface IProduct {
//   id: number;
//   productName: string;
//   price: number;
//   qunatity: number;
//   rate: number;
//   discount: (x: number) => void; // function signature
// }

// class Product implements IProduct {
//   constructor(
//     public id: number,
//     readonly productName: string,
//     public price: number,
//     public qunatity: number,
//     public rate: number
//   ) {}
//   discount(x: number): void {}
// }

// class Cagegory extends Product {
//   constructor(
//     id: number,
//     productName: string,
//     price: number,
//     qunatity: number,
//     rate: number
//   ) {
//     super(id, productName, price, qunatity, rate);
//   }
// }

// let c = new Cagegory(3, "s", 1, 2, 4);

// console.log(c);
