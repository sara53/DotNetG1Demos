function test(myFun) {
  myFun(
    function () {
      console.log("First");
    },
    function () {
      console.log("Second");
    }
  );
}

test(function (x, y) {
  x();
  y();
  console.log("Hello Dot Net");
});

/** synchrouns
 * ------------------------
 *  Async --> setTimeOut, setInterval
 *   */
// function greet() {
//   console.log("First");
//   second();
//   console.log("End");
// }

// function second() {
//   setTimeout(() => {
//     console.log("Second");
//   }, 2000);
//   console.log("Alii");
// }

// greet();

/**
 * First --> 2000 --> Second --> End
 *
 */

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 0);

// console.log("End");

// setTimeout(() => {
//   console.log("Hello Dot Net");
// }, 2000);

// setTimeout(() => {
//   console.log("Welcome From ITI");
// }, 1000);

// console.log("ITI :)");

// var products;

// // time reqest return products
// setTimeout(() => {
//   products = ["lap top ", "su,"];
//   console.log(products[0]);
// }, 2000);

/** ================ */
/*
var userIds;

setTimeout(() => {
  userIds = [100, 200, 300];

  setTimeout(() => {
    var user = {
      id: userIds[0],
      name: "ali",
      address: "alex",
      salary: 200,
    };
    setTimeout(() => {
      let address = user.address;
      console.log(address);
    }, 500);
  }, 1000);
}, 2000);

*/

/** js  */
function getUserIds() {
  return new Promise(function (x, y) {
    var userIds;
    setTimeout(function () {
      userIds = [100, 200, 400];
      userIds ? x(userIds) : y("Error on getting ids list");
    }, 2000);
  });
}

function getUser(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      var user = {
        id: userId,
        fname: "ali",
        address: "alex",
      };

      user ? resolve(user) : reject("Error on getting user");
    }, 1000);
  });
}

function getAddress(user) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      var address = user.address;

      address ? resolve(address) : reject("Error on getting address");
    }, 500);
  });
}

/** asynchrouns */
// async function execute() {
//   try {
//     var userIds = await getUserIds();
//     var user = await getUser(userIds[0]);
//     var address = await getAddress(user);
//     console.log(address);
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();
// getUserIds()
//   .then(function (data) {
//     return getUser(data[0]);
//   })
//   .then(function (user) {
//     return getAddress(user);
//   })
//   .then(function (address) {
//     console.log(address);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/**
 *
 * pending
 * fullfilled // success
 * rejected // fail
 */

// setTimeout(() => {
//     userIds = [100, 200, 300];
//     if (userIds) {
//       x(userIds);
//     } else {
//       y("Error on Getting User Ids");
//     }
//   }, 2000);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(function (error) {
//     console.log(error);
//   });

// async function test() {
//   try {
//     var response = await fetch("https://jsonplaceholder.typicode.com/users");
//     var data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// test();
/**======================= */

// super class , parent
// class Person {
//   constructor(fname = "default Name", age = 1) {
//     this.fname = fname; // syntax suger , property
//     this.age = age;
//   }

//   display() {
//     console.log(this.fname);
//   }
// }

// // sub class , child , inhertance
// class User extends Person {
//   constructor(fname, age, password) {
//     super(fname, age);
//     this.password = password;
//   }
//   // override
//   display() {
//     console.log(this.fname + this.age + this.password);
//   }

//   sayHello() {
//     console.log("User Logged");
//   }
// }

// var myUser = new User("mona", 30, "123");
// myUser.display();
// get ,set

// var person1 = new Person(1, "ali", 20);

// //[get,set] ==> person1.fname , person1.fname = new value

// person1.setId = "12";

// console.log(person1.getId);
