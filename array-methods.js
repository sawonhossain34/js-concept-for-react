const products = [
    {name:'laptop', price:2000, brand:'lenevo', color:'silver'},
    {name:'phone', price:7000, brand:'iphone', color:'golden'},
    {name:'watch', price:3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price:300, brand:'ribon', color:'black'},
    {name:'camera', price:9000, brand:'canon', color:'gray'},

]
/// no 1 map()
const brands = products.map(product => product.brand);
// console.log(brands);

const price = products.map(product => product.price);
// console.log(price);


/// no 2 forEach()
//  products.forEach(product => console.log(product.price));


 /// no 3 filter()
const cheap = products.filter(product => product.price > 2000);
// console.log(cheap);

const spicificName = products.filter(product => product.name.includes('n'));
// console.log(spicificName);

const spicial = products.find(product => product.name.includes('n'));
console.log(spicial);
