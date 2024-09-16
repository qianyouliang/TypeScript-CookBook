"use strict";
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a); // 输出: 10
a += b;
console.log("a += b: " + a); // 输出: 20
a -= b;
console.log("a -= b: " + a); // 输出: 10
a *= b;
console.log("a *= b: " + a); // 输出: 100
a /= b;
console.log("a /= b: " + a); // 输出: 10
a %= b;
console.log("a %= b: " + a); // 输出: 0
