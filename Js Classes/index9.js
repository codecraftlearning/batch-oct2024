

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.print = function() {
    console.log(this.name, this.age);
 }

let person = new Person("code craft", 2);
person.print();
