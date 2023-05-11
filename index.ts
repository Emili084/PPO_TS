class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName() {
        console.log(`I am ${this.name}`);
    }

    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
