"use strict";

// to String

// 1) 
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// to Number
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'6'));

// 3)
console.log(typeof(parseInt('15px', 2)));
console.log(parseInt('15px', 10));
console.log(parseInt(15, 2));

// from decimal to binary
let m = 1114;
let arr = [];

for (let i = 0; m != 0; i++) {
    let n = 0;
    let power = 0;
    while (n <= m) {
        n = Math.pow(2, power);
        power ++;
    }
    power = power - 2;
    arr[i] = power;
    m = m - Math.pow(2, power);
}


let myLength = arr[0] + 1;
let binaryArr = [];
for (let j = 0; j < myLength;  j++) {
    binaryArr[j] = 0;
}


for (let a = 0; a < arr.length; a++) {
    binaryArr[arr[a]] = 1;
}
let myBinaryNumber = binaryArr.reverse();

console.log(myBinaryNumber.join(''));
