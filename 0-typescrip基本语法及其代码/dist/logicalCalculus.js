"use strict";
var avg = 20;
var percentage = 90;
console.log("avg 值为: " + avg + ", percentage 值为: " + percentage); // 输出: 20, 90
var res = ((avg > 50) && (percentage > 80));
console.log("(avg > 50) && (percentage > 80): " + res); // 输出: false
var res = ((avg > 50) || (percentage > 80));
console.log("(avg > 50) || (percentage > 80): " + res); // 输出: true
var res = !((avg > 50) && (percentage > 80));
console.log("!((avg > 50) && (percentage > 80)): " + res); // 输出: true
