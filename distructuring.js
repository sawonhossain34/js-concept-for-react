// const numbers = [45,56];

// const num1 = numbers[0];
// const num2 = numbers[1];
// const [num1, num2]= numbers;

// console.log(num1,num2);

function boxify(num1,num2) {
    const num = [num1,num2];
    return num;
}
const result = [frist,second] = boxify(230,235);
// console.log(boxify(50,90));
// console.log(result);

const student =  {
    name : 'sakib khan',
    age : 24,
    movies : ['sikari','nobab']
}

const totalMovies = [firstmove,secondMove] = student.movies;
// console.log(totalMovies);

// object desturturing 
const { name,id,work}= {name:'sawon' , work:'student',id:12}
// console.log(name,work,id);

const employee = {
    id:1235,
    disignation:'developer',
    machin:'Mac',
    language:['html','css','js'],
    specification:{
        height:56,
        weight:78,
        address:'mohakale',
        drink:'water',
        watch:{
            color:'black',
            brand:'ster',
            price:5000
        }

    }
}

const {machin,disignation} = employee;
console.log(disignation);

const [product1,product2,product3] = employee.language;
console.log(product1);

const  {height,address}=employee.specification;
console.log(height,address);

const {color,brand}= employee?.specification?.watch;
console.log(color,brand);