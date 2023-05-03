// function getUserData() {
//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     var tbody = document.getElementById("tbody");
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var userData = JSON.parse(xhr.response);
//         var tr = document.createElement("tr");
//         var td1 = document.createElement("td");
//         var td2 = document.createElement("td");
//         var td3 = document.createElement("td");
//         td1.innerHTML = userData.id;
//         td2.innerHTML = userData.name;
//         td3.innerHTML = userData.email;
//         tr.append(td1, td2, td3);
//         tbody.append(tr);
//       }
//     }
//   };

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/6");
//   xhr.send("");
// }

// /** get All Users */

// document.cookie = "email=a@a.com";
// document.cookie = "username=mona";

// // get
// console.log(document.cookie);

// var myDate = new Date();

// myDate.setDate(myDate.getDate() + 3);

// document.cookie = "email=ff;expires=" + myDate;

// console.log(myDate);

// document.cookie = "email=sara@.com"
// document.cookie = "email=a@a.com;expires=" + myDate;

// function saveCookie(key, value) {
//   document.cookie = key +"=" +value + ";expires=" + myDate;
// }

// saveCookie("email","aee")

// saveCookie("password",'123')
// deleteCookie(key){
//     //
// }

// getAllCookies(){

// }

// console.log()

// document.cookie = "username=mona;expires=" + myDate;
// document.cookie = "password=123;expires=" + myDate;

// console.log(document.cookie);

// document.cookie = ""

// var fname = "mona";
// // console.log(window.fname);

// function getName() {
//   console.log(fname);
// }

// getName();
// window.getName();

// console.log(getName());

// var fname = "mona";

// function getName() {
//   console.log(this.fname);
// }

// console.log(window.fname);

// var fname = "mona";
// var person = {
//   fname: "Ali",
//   display: function () {
//     var that = this; // person
//     window.setTimeout(function () {
//       console.log(this.person.fname);
//     }, 2000);
//   },
// };
// person.display();

// getName();
