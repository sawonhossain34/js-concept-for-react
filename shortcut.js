
const money = 500;
let food;
if(money > 100){
    food = 'birany';
}else{
    food = 'cha biskut';
}
// console.log(food);
/// ternary operator
const food1 = money > 200 ? 'birany' : 'cha biskut';
// console.log(food1);

// convert string and number
const num1 = 12;
const num2String = num1 + '';
const num3 = +num2String;
console.log(num1);
console.log(num2String);
console.log(num3);

const isActive = true;
const showdetal = () => console.log('hello show');
const shownicc = () => console.log('hello nnic');

isActive ? showdetal() : shownicc();
// console.log(isActive);