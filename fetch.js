 // Normal 
 const student =  {
    name : 'sakib khan',
    age : 24,
    movies : ['sikari','nobab']
}
//JSON stringify
const studentJson = JSON.stringify(student);
// JSON parse
const studentParse =JSON.parse(studentJson);

// console.log(student);
// console.log(studentJson);
// console.log(studentParse);


const products = [
    {name:'laptop', price:2000, brand:'lenevo', color:'silver'},
    {name:'phone', price:7000, brand:'iphone', color:'golden'},
    {name:'watch', price:3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price:300, brand:'ribon', color:'black'},
    {name:'camera', price:9000, brand:'canon', color:'gray'},

]
const newproduct = {name:'walet', price:222, brand:'red'}
// copy product array and then add newproduct
const newproducts =[...products,newproduct]
// console.log(newproducts);

// copy array and remove phone this array
const remaing = products.filter(product => product.name !== 'phone');
console.log(remaing);