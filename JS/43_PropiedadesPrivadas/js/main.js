// Propiedades privadas

class Employee{

    name;
    surname; // Publicas por defecto
    #age; // Privada
    #department;

    constructor(nameIn,surnameIn){
        this.name=nameIn;
        this.surname=surnameIn;
    }

    getAge(){
        return this.#age;
    }

    setAge(age){
        this.#age = age;
    }
}

let employee1 = new Employee('Juan', 'Gomez');
// console.log(employee1.#age); / error la propiedad no es accesible

employee1.setAge(44);
console.log(employee1.getAge());