'use strict';



var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "Jone",
    age: 25,
    isMarried: false
};

console.log (persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log (arr[0])

alert("Hello Word");

//let answer = confirm("Are you Here?");

//console.log(answer);

//let answer = +prompt("Есть ли вам 18?", "Да");

//console.log(typeof(answer));

//console.log("arr" + "- object");
//console.log(4 + "- object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || isClose);