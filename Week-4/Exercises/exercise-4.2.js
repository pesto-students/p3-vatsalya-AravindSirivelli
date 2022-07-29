// Problem Statement :
//Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, 
//and prints out: 
//      [teacher's name]is now teaching[subject]



function Person() { }
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
function Teacher() { }
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
var result = new Teacher();
result.initialize("aravind", 25);
result.teach("music");


















// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     teach(subject) {
//         console.log(this.name + " is now teaching " + subject);
//     }
// }
// var Teacher = new Person("Aravind");
// Teacher.teach("Music");