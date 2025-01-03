// Challenge : greet people

function hello(name){
    console.log(`Hello, ${name}`);
}

hello('bob');
hello('susy');
hello('anna')

// Challenge : calculate a value and return it 
const wallHeight = 80;
const wallWidth  = 100;
function calculate(value){
    return (value) * 2.54;
}
const width  = calculate(wallWidth);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

const add = (num1, num2) => { 
    return num1 * num2;
}
const result = add(2,4);
console.log(result);


// Challenge : 
/*
1 . create calculat total function
2 . add two parameters subtotal, tax
3 . return sum of parameters
4 . create 3 vars "order1" "order2" "order3"
5 . call calulate result, pass in some values and assign result to each other 
6 . log all three orders
7 . refactor calculate total to function expression
 */

const calculateTotal = (subTotal, tax)=> subTotal + tax;
const order1 = calculateTotal(3000, 200);
const order2 = calculateTotal(4000, 400);
const order3 = calculateTotal(5000, 500);

console.log(order1, order2, order3);
