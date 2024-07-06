// queryselector
//const para = document.querySelector('p')
//const para = document.querySelector('error')
//const para = document.querySelector('div.error')
//const para = document.querySelector('body > h1');
//console.log(para);

// querySelectorAll
// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para);
// })
// const errors = document.querySelectorAll('.error');
// console.log(errors);

// Get an Element by ID
// const title = document.getElementById('page-title');
// console.log(title); 

// Get Element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// Get Element by their tag name
//const para = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1])

// Changing the text inside elements
//const paras = document.querySelectorAll('p');
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';
//});
//Eg for crabbing content  inside div
 //const content = document.querySelector('.content')
// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2 <h2/>';
//const people = ['mary', 'luigi', ' mario'];
//people.forEach(person => {
    // content.innerHTML += `<p>${person}<p/>`;
//});

// Get an update attribute of html element
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website'
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');