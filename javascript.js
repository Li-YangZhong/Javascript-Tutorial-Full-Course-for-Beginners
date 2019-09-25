//console.log('test3');//comment
/*another
kind of
comment*/

// var number =9;

// var undefinedVar;
// console.log(typeof(undefinedVar));
// var myNull = 8;
// console.log(typeof(myNull));
// console.log(myNull);

// myNull = "a string";
// console.log(myNull);

// var aVar= "a string";
// console.log(aVar);
// var AVAR = 5;
// console.log(AVAR);
// avar = 10;

// var product = 2.0 * 2.5;
// console.log(product);
// console.log(typeof product);

// var remainder = 11%3;
// console.log(remainder);

// var a = 12;
// a += 2;
// console.log(a);
// a -= 1;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 2;
// console.log(a);

// var myStr = "I have a \"quote\" inside this sentence."
// console.log(myStr);

// var myStr1 = 'I have a \"quote\" inside this sentence.'
// console.log(myStr1);

// var myStr2 = `I have a single 'quote' and a double "quote" inside this sentence.`
// console.log(myStr2);// backtick

// var ourStr = "first sentence." + " second sentence.";
// console.log(ourStr);

// ourStr += " third sentence.";
// console.log(ourStr);

// var firstName = "Eric";
// var lastName = "Li";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// var fullNameLength = fullName.length;
// console.log(fullNameLength);

// var secondLetterOffullName = fullName[1];
// console.log(secondLetterOffullName);

// var lastLetterOffirsName = firstName[firstName.length - 1];
// console.log(lastLetterOffirsName);

// var result = "";
// result += "I am a " + " sentence " + " made up with " + " words. ";
// console.log(result);

// var myArray = [50, 60, 70];
// var myData = myArray[1];
// console.log(myData);
// myArray[0] = 80;
// console.log(myArray);

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]]
// var myData = myArray[3][0][1]; //11
// console.log(myData);

// var myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);
// console.log(myArray);
// myArray.pop(["dog", 3]);
// console.log(myArray);
// var arrayRemoved = myArray.shift();
// console.log(myArray);
// console.log(arrayRemoved);
// myArray.unshift(["Paul", 35]);
// console.log(myArray);

// function ourReusableFunction() {
//     console.log("Heyya, World");
// }
// ourReusableFunction();

// function functionWithArgs(a,b) {
//     console.log(a + b);
// }

// functionWithArgs( 1, 7);


// var myGlobal = 10;

// function fun1() {
//     oopsGlobal = 5; /*if a variable is not declared with var, it will have global scope automatically*/

// }

// function func2() {
//     var output ="";
//     if(typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// func2();


// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();
// console.log(myVar);

// var outerWear = "T-Shirt";

// function myOutfit() {
//     return outerWear;
// }

// console.log(myOutfit());//T-Shirt


// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear = "sweater";
//     return outerWear;
// }

// console.log(myOutfit());//sweater
// console.log(outerWear);//T-shirt


// function doubleIt(num) {
//     return num *2;
// }

// console.log(doubleIt(10));
// console.log(doubleIt(10)*2);


// var sum = 0;

// function addFive() {
//     sum += 5;
// }

// console.log(addFive());


// function nextInline(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


// function returnFlase() {
//     return false;
// }

// console.log(returnFlase());


// function trueOrFalse(wasThatTrue) {
//     if(wasThatTrue) {
//         return "Yes, that was true"
//     }
//     return "No, that was false";
// }

// console.log(trueOrFalse(true));

// function testEqual(val) {
//     if(val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(10));


// console.log(3 === '3'); //false
// console.log(3 == '3'); //true
// console.log(10 != 99); //true
// console.log("10" !== 10);//true
// console.log( 5 > 1);//true
// console.log( 5 >= 1);//true
// console.log( 0 < 1);//true
// console.log( 0 <= 1);//true
// console.log(true && false);//false
// console.log(true && true); //true
// console.log(false && true); //false
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false


// function testElse(val) {
//     var result = "";

//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or Smaller";
//     }

//     return result;
// }

// console.log(testElse(4));
// console.log(testElse(6));


// function testElseIf(val) {
//     if(val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }

// console.log(testElseIf(11));
// console.log(testElseIf(4));
// console.log(testElseIf(7));

// function orderMyLogic(val) {
//     if(val < 5) {
//         return "Less than 5";
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(3));

// function findNameOfDay(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//             answer = "Monday";
//             break;
//         case 2:
//             answer = "Tuesday";
//             break;
//         case 3:
//             answer = "Wednesday";
//             break;
//         case 4:
//             answer = "Thursday";
//             break;
//         case 5:
//             answer = "Friday";
//             break;
//         case 6:
//             answer = "Saturday";
//             break;
//         case 7:
//             answer = "Sunday";
//             break;
//         default:
//             answer = "Not valid";
//             break;
//     }
//     return answer;
// }


// console.log(findNameOfDay(1));

// function sequentialSizes(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "Low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//     }
//     return answer;
// }

// console.log(sequentialSizes(7));


// function isLess(a,b) {
//     return a < b;
// }

// console.log(isLess(10,13));
// console.log(isLess(15,13));


// function abTest(a,b) {
//     if(a < 0 || b < 0) {
//         return undefined
//     }

//     return a + b;
// }

// console.log(abTest(1, 2));


// var count = 0;

// function cc(card) {
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }

//     var holdbet = "Hold";
//     if(count > 0) {
//         holdbet = "Bet";
//     }

//     return count + " " +holdbet;
// }
// cc(2); cc("K"); cc(10); cc('K'); cc('A');
// console.log(cc(4));

// var ourDog = {
//     "name": "Camper",
//     "leg": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// console.log(typeof ourDog);
// console.log(ourDog.name); // accessing object value via dot notation
// console.log(ourDog["name"]);

// var valueOfProperty = "name";
// console.log(ourDog[valueOfProperty]);

// ourDog.name = "Happy Camper";
// console.log(ourDog.name);

// ourDog.bark = "bow-wow";
// console.log(ourDog.bark);

// delete ourDog.bark;
// console.log(ourDog.bark);//undefined



// function Lookup(val) {
//     var answer = "";
//     var lookup = {
//         1:"Monday",
//         2:"Tuesday",
//         3:"Wednesday",
//         4:"Thursday",
//         5:"Friday",
//         6:"Saturday",
//         7:"Sunday",
//     }
//     return lookup[val];
// }

// console.log(Lookup(1));
// console.log(Lookup(5));


// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else {
//         return "Not Found";
//     }
// }

// console.log(checkObj("gift"));
// console.log(checkObj("hello"));

// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// }

// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ]

// var secondTree = myPlants[1].list[1];
// console.log(secondTree);

// var collection = {
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvettef"
//         ]
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// }

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//     if(value ==="") {
//         delete collection[id][prop];
//     } else if (prop==="tracks") {
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }

// console.log(updateRecords(5439,"artist", "ABBA"));
// console.log(updateRecords(2468,"tracks","test"));

// var myArray = [];

// var i = 0;
// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);
//----------------------
// var ourArray =[];

// for(var i = 0; i < 5; i++) {
//     ourArray.push(i);
// }

// console.log(ourArray);


//-------------------------

// var ourArray = [];

// for(var i = 0; i < 10; i += 2) {
//     ourArray.push(i);
// }

// console.log(ourArray);

//--------------------

// var ourArray = [];

// for(var i = 10; i > 0; i -=2) {
//     ourArray.push(i);
// }

// console.log(ourArray);

//-----------------------

// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }

// console.log(ourTotal);
//-----------------------
// function multiplyAll(arr) {
//     var product = 1;

//     for (var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }

//     return product;
// }

// var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
// console.log(product);

//-------------------------
// var myArray = [];
// var i = 10;

// do {
//     myArray.push(i);
//     i++;

// } while (i < 5)

// console.log(i, myArray);
//--------------------

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     }
// ];

// function lookUpProfile(name, prop) {
//     for (var i = 0; i < contacts.length; i++) {
//         if(contacts[i].firstName === name) {
//             return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contact";


// }

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("shirlock", "likes"));
// console.log(lookUpProfile("Sherlock", "hello"));

//-------------------------
// console.log(Math.random());

//--------------------

// var randomNumberBetween0and19 = Math.floor(Math.random()*20);
// console.log(randomNumberBetween0and19);

//---------------
// function ourRandomRange(ourMin, ourMax) {
//     return Math.floor(Math.random()*(ourMax - ourMin +1)) + ourMin;
// }

// console.log(ourRandomRange(1, 9));
//-------------

// console.log(parseFloat("56"));
// console.log(typeof parseInt("56"));
// console.log(typeof "56");
// console.log(parseInt("10011", 2));
// console.log(parseInt("19", 10));
// console.log(parseInt("23", 8));
// console.log(parseInt("13", 16));
//-----------------
// function checkEqual(a, b) {
//     return a === b ? true : false;
// }

// console.log(checkEqual(1, 2));
// console.log(checkEqual(2, 2));
//=================
// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }

// console.log(checkSign(10));
// console.log(checkSign(-10));
// console.log(checkSign(0));
//===================
// let catName = "Quincy";
// let quote;

// catName = "Beau";

// function catTalk() {
//     "use strict";

//     catName = "Oliver";
//     quote = catName + " says Meow!";
//     return quote;
// }

// console.log(catTalk());
//=======================
// function checkScope() {
// "use strict";
//     var i = "function scope";
//     if (true) {
//         i = "block scope";
//         console.log("Blockscope i is: ", i);
//     }

//     console.log("Function scope i is: ", i);
//     return i;
// }
// console.log(checkScope());
//=====================
// function checkScope() {
//     "use strict";
//         let i = "function scope";
//         if (true) {
//             let  i = "block scope";
//             console.log("Blockscope i is: ", i);
//         }

//         console.log("Function scope i is: ", i);
//         return i;
//     }
//     console.log(checkScope());
//===================

// function checkScope() {
//     "use strict";
//     if (true) {
//         var i = "block scope";
//         console.log("Blockscope i is: ", i);
//     }

//     console.log("Function scope i is: ", i);
//     return i;
// }
// console.log(checkScope());
//====================

// function checkScope() {
//     "use strict";
//     if (true) {
//         let i = "block scope";
//         console.log("Blockscope i is: ", i);
//     }

//     console.log("Function scope i is: ", i);
//     return i;
// }
// console.log(checkScope());
//================
// function printManyTimes(str) {
//     "use strict";

//     const SENTENCE = str + " is cool!";
//     SENTENCE = "TRY TO CHANGE THE SENTENCE"; //this line does not work.
//     for(let i = 0; i < str.length; i += 2) {
//         console.log(SENTENCE);
//     }
// }

// printManyTimes("freeCodeCamp");

//=====================

// const s = [5, 7, 12];
// s[0]=13;
// s[1]=14;
// s[2]=15;

// console.log(s);
//==============

// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch (ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);
//=================

// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     Object.freeze(MATH_CONSTANTS);
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch (ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);

//================
var magic = function() {
    return new Date();
}

console.log(magic());
//===============
var magic = () => {
    return new Date();
}

console.log(magic());
//============
var magic = () => new Date();

console.log(magic());
//===============
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,4,5]));
//=============
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));
//==============

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntergers = arr.filter(num => Number.isInteger(num) && num > 0).map( x => x * x);
    return squaredIntergers;
}

const squaredIntegers =squareList(realNumberArray);
console.log(squaredIntegers);
//===================
// const increment = (function() {
//     return function increment(number, value = 1) {
//         return number + value;
//     }
// })();
// console.log(increment(5,2));
// console.log(increment(5));
// console.log(increment);
//================
function increment(number, value = 1) {
    return number + value;
};
console.log(increment(5,2));
console.log(increment(5));
console.log(increment);
//===============
// function sum(x, y, z) {
//     const args = [x,y,z];
//     return args.reduce((a,b) => a + b, 0);
// }

// console.log(sum(1,2,3));
//==================
// function sum(...args) {
//     return args.reduce((a,b) => a + b, 0);
// }

// console.log(sum(1,2,3,4));

// const arr1 = ['JAN', 'FEB', 'MAR'];
// let arr2;
// (function() {
//     arr2 = arr1;
//     arr1[0] ='potato';
// })();
// console.log(arr2);
//==============
// function sum(...args) {
//     return args.reduce((a,b) => a + b, 0);
// }

// console.log(sum(1,2,3,4));

// const arr1 = ['JAN', 'FEB', 'MAR'];
// let arr2;
// (function() {
//     arr2 = [...arr1];
//     arr1[0] ='potato';
// })();
// console.log(arr2);
// console.log([...arr2]);
// console.log(...arr2);

//===============
// var voxel = {x: 3.6, y: 7.4, z: 6.54};

// const {x: a, y:b, z : c} = voxel;
// console.log(a,b,c);


// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// }

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     const { tomorrow: tempOfTomorrow } = avgTemperatures;

//     return tempOfTomorrow;
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES));
//===============
// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83},
//     tomorrow: { min: 73.3, max: 84.6}
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";

//     const {tomorrow: { max: getMaxOfTmrw}} = forecast;

//     return getMaxOfTmrw;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));
//===========
// const [z,x,,y] = [1,2,3,4,5,6];
// console.log(z,x, y);

// let a =8, b = 6;
// (() => {
//     "use strict";
//     [a,b]=[b,a]
// })();
// console.log(a);
// console.log(b);
//=======================