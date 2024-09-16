var a: number = 12;
var b: number = 10;

a = b;
console.log("a = b: " + a);  // 输出: 10

a += b;
console.log("a += b: " + a);  // 输出: 20

a -= b;
console.log("a -= b: " + a);  // 输出: 10

a *= b;
console.log("a *= b: " + a);  // 输出: 100

a /= b;
console.log("a /= b: " + a);  // 输出: 10

a %= b;
console.log("a %= b: " + a);  // 输出: 0