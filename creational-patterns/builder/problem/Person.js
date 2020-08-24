class Person{
 constructor(name, age, isEmployee)
    {
        this.name = name;
        this.age = age;
        this.isEmployee = isEmployee
    }
    toString(){
        return JSON.stringify(this);
    }
};

export default Person;