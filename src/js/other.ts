export class Person {

    name: string = 'john';

    constructor(name: string) {
        this.name = name;
        console.log('from constructor');
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}