let name = 'Atimango Mary';
let age = 23;

console.log(name, age);

const point = 100;
console.log(point)

var score =75;
console.log(score)

// strings
console.log('hello world');
let email = 'atimangomary@95gmail.com';
console.log(email);

let firstName = 'Atimango';
let lastName = 'Mary';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(fullName[0]);
console.log(fullName.length);

console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
// console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

let radius = 10;
const pi = 3.14;
 console.log(radius, pi);

// math operators +, -, / *, ** %

console.log(10/2);
// let results = radius % 3;
 //let results = Math.PI * radius**2;

// order of operation - B I D M A S
// console.log('Math PI:', Math.PI)

// let result = 5* (10-3)**2;
// console.log(results);

//let likes = 10;
//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

// console.log(likes);
//NaN - not a Number
//console.log(5/ 'hello');
//console.log(5 * 'hello');

//let result ='the blog has' + likes + likes;
//console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;


// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result)
 
//template strings way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html template
let html =`
<h2>${title}</h2>
<p>By ${author}</>
<span>This blog has ${likes} likes</span>
`;
console.log(html);


