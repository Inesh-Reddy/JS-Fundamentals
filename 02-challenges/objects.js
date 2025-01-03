// Challenge : 


const person = {
    firstName:"John",
    lastName:"Peters",
    age:40,
    education:false,
    married:true,
    siblings:['anna','susan','peter'],
    greeting:function(){
        console.log(`Hello my name is ${this.firstName}`);
    },
    greets(){
        console.log(`Hello my name is ${this.lastName}`);
    }
}

console.log(person.firstName);
console.log(person.siblings[2]);
person.greeting();
person.greets();


/**
 * create car object
 * add make model year colors(array), hybrid(boolean) keys
 * add two methods(drive and stop)
 * in the function body setup log with random text
 * log make
 * log first color
 * invoke both methods
 */

const car = {
    make: "Benz",
    model: "G-Wagon",
    year: 2023,
    colors: ['black','red','green'],
    hybrid: true,
    drive(){
        console.log("driving...");
    },
    stop(){
        console.log("stoping...")
    },

}

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();