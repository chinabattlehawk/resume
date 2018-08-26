function People(name, age) {
	this.name = name;
	this.age = age;
	this.clothing = ['trousers', 'dress', 'jacket'];
}

console.log(People.prototype.constructor);

People.prototype.sayName = function () {
	console.log('我的名字叫：' + this.name);
};


function Man(name, age, job) {
	People.call(this, name, age); // 继承属性
	this.job = job; // 自有属性
}

Man.prototype = new People(); // 继承方法

Man.prototype.sayJob = function () { // 自有方法
	console.log('我的工作是' + this.job);
};

var man1 = new Man('Bill', 22, 'teacher');


man1.sayName();
man1.clothing.push('shoes');
console.log(man1.clothing); // [ 'trousers', 'dress', 'jacket', 'shoes' ]
var man2 = new Man('jim', 24, 'driver');
console.log(man2.clothing); // [ 'trousers', 'dress', 'jacket' ]
