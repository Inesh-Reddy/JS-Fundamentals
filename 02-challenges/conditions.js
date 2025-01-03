//conditional statements
// >, <, >=, <=, ==, ===, !=, !===

/**
 * Challenge
 * create two objects "person1" and "person2"
 * setup name, age(15-25)
 * status('resident', 'tourist)keys
 * setup if esle, condition where 
 * age must be bigger than 18 and status must be equal to 'resident'
 * test with both objects
 */

const person1 = {
    firstName: "John",
    age: 19,
    status: 'resident',
}

const person2 = {
    firstName: "peters",
    age: 25,
    status: 'tourist',
}

if(person1.age>18 && person1.status === "resident"){
    console.log('resident');
}else{
    console.log('tourist');
}

if(person2.age>18 && person2.status === 'resident'){
    console.log('resident');
}else{
    console.log('tourist');
}