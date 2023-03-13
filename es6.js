const numbers = [12,36,54,87,12];

const student =  {
    name : 'sakib khan',
    age : 24,
    movies : ['sikari','nobab']
}

const about = `My name is ${student.name} of age ${student.age} has number ${numbers[2]} also liked movie ${student.movies[1]}
`;
console.log(about);

// spread opreator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const crrentNumbers = [...numbers,96];


numbers.push(56);


console.log(numbers);
console.log(newNumbers);
console.log(crrentNumbers);