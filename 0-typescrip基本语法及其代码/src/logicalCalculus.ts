var avg: number = 20;
var percentage: number = 90;

console.log("avg 值为: " + avg + ", percentage 值为: " + percentage);  // 输出: 20, 90

var res: boolean = ((avg > 50) && (percentage > 80));
console.log("(avg > 50) && (percentage > 80): " + res);  // 输出: false

var res: boolean = ((avg > 50) || (percentage > 80));
console.log("(avg > 50) || (percentage > 80): " + res);  // 输出: true

var res: boolean = !((avg > 50) && (percentage > 80));
console.log("!((avg > 50) && (percentage > 80)): " + res);  // 输出: true