// Get y Set

class Employee{

    name;
    surname; // Publicas por defecto
    #age; // Privada
    #department;
    #dni;

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

    get dni(){
        return this.#dni;
    }

    set dni(dni){
        this.#dni = dni;
    }
}

let employee1 = new Employee('Juan', 'Gomez');

employee1.dni = '555343235'; //En la invocacion de los metodos se usan como propiedades

console.log(employee1.dni);