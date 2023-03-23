const Person = function () {};

Person.prototype.initialize = (name, age) => {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};
Teacher.prototype.teach = (subject) => {
  this.subject = subject;
  console.log(`${this.name} is now teaching ${this.subject}`);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const newTeacher = new Teacher();
newTeacher.initialize("Newton", 48);
newTeacher.teach("Physics");
