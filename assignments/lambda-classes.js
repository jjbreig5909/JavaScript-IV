// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        return `My favorite subjects are ${this.favSubjects}.`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pMAttrs){
        super(pMAttrs);
        this.gradClassName = pMAttrs.gradClassName;
        this.favInstructor = pMAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

// test objects below //
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jeff = new Student({
    name: 'Jeff',
    location: 'Cincinnati',
    age: 27,
    favSubjects: 'Python',
    className: 'WebPT11',
    previousBackground: 'Enginerd'
});

const mike = new ProjectManager({
    name: 'Mike',
    location: 'Chicago',
    age: 28,
    gradClassName: 'WebPT9',
    favInstructor: 'Chris'
});

console.log(jeff.listsSubjects());
console.log(jeff.PRAssignment("javascript"));
console.log(jeff.sprintChallenge("python"));
console.log(mike.standUp("WebPT11"));
console.log(mike.debugsCode(jeff, "C++"));
console.log(fred.demo("React"));
console.log(fred.grade(jeff, "React"));
console.log(jeff.speak());