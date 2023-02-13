"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ["Banana", "Mango", "Watermelon", "Gwava", "Strobarry", "Pineapple"];
//-----------------------------arrow function-----------------------------
var stringLength = function (fruits) {
    fruits.forEach(function (fruit) {
        console.log(fruit, fruit.length);
    });
};
// stringLength(fruits)
//-----------------------------spread operator-----------------------------
var addFruits = function (newFruits) {
    fruits = __spreadArray(__spreadArray([], fruits, true), newFruits, true);
    console.log(fruits);
};
// addFruits(["Apple","Grapes"]);
//-----------------------------forof loop-----------------------------
var text = "is delecious";
// for (let fruit of fruits) {
//   fruit = fruit + " " + text;
//   console.log(fruit);
// }
//-----------------------------Map-----------------------------
var cars = new Map([
    ["volvo", 2500000],
    ["tesla", 10000000]
]);
cars.set("nexon", 2000000);
// console.log(cars.get("nexon"));
cars.delete("volvo");
var car = cars.entries();
// console.log(cars,car,cars.keys(),cars.values(),typeof cars);
//-----------------------------Set-----------------------------
var phones = new Set(["apple", "one plus", "realme", "realme", "Samsung"]);
phones.add("oppo");
phones.add("oppo");
phones.add("vivo");
// console.log(phones, phones.values(), phones.keys(), phones.entries(), typeof phones);
//-----------------------------Class-----------------------------
var Phone = /** @class */ (function () {
    function Phone(brand, model, storage, gamming) {
        this.brand = brand,
            this.model = model,
            this.storage = storage,
            this.gamming = gamming || false;
    }
    Phone.prototype.detail = function () {
        console.log("brand:".concat(this.brand, " , model:").concat(this.model, " , storage:").concat(this.storage, " , gamming:").concat(this.gamming));
    };
    return Phone;
}());
var rog = new Phone("Asus", "rog", 256, true);
var a50 = new Phone("Samsung", "a50", 128);
// rog.detail()
// a50.detail()
//-----------------------------Promises-----------------------------
var fetchData = new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", "text.txt");
    req.onload = function () {
        if (req.status == 200) {
            resolve(req.response);
        }
        else {
            reject("File not Found");
        }
    };
    req.send();
});
fetchData.then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
