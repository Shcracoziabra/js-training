
'use strict';

/* console.log(document.head); */
/* console.log(document.documentElement); */
/* console.log(document.body.childNodes); */
/* console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentNode.parentNode);

console.log(document.querySelector('[data-current="3"]').parentElement);

for (let node of document.body.childNodes) {
    if(node.nodeName == '#text'){
        continue;
    }

    console.log(node);
} */
 
// Lecture 46

/* function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);
 */
/* const obj = {
    a: 20,
    b: 20,
    sum: function () {
        function shout (){
            console.log(this);
        }
        shout();
    }
};

obj.sum(); */

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello ' + this.name);
    };
}
let Ivan = new User('Ivan', 23);
Ivan.hello(); */

/* function sayName(surname, profession) {
    console.log(this);
    console.log(this.name + surname + ': ' + profession);
}

const user = {
    name: 'John'
};

// методы apply и call устанавливают контекст фунции в скобках-объект,аргументы
sayName.call(user, 'Smith', 'engineer'); 
sayName.apply(user, ['Mauerer', 'forecaster']);

/* function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */

/* const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    this.style.background = 'yellow'; 
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    } 
};

obj.sayNumber();

const double = a => a * 2;
 */

// 1) Обычная функция : this = window, 'use strict': this = undefined
// 2) контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// Lecture 47

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());
/* const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
console.log(square.calcArea());
console.log(long.calcArea()); */


