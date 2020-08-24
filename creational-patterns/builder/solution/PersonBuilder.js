import Person from './Person.js';

class PersonBuilder {
    constructor(name){
        this.name = name;
    }
    age(age){
        this.age = age;
        return this;
    }

    isEmployee(isEmplyee){
        this.emp = isEmplyee;
        return this;
    }

    build(){
        return new Person(this.name, this.age, this.emp);       
    }
}

export default PersonBuilder;