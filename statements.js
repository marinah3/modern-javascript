// if statements
//const age = 25;

// if (age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'mario', 'elvis', 'mary'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
//}

// const password = 'p@ssword';
//  if (password.length >= 8){
//     console.log('that password is long enough!')
//  }


//else if statements

// const password = 'p@ssword1234';

// if(password.length >= 12){
//     console.log('that password is mighty strong')
// } else if (password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }



// logical operators - OR || and AND &&
// 



//logical NOT (!)

// let user = false;

// if(user){
//    console.log('you must be logged in to continue'); 

// }

// console.log(!true);
// console.log(!false);


// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
// if(scores[i] === 0){
//     continue;
// }
// console.log('your score:', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }


// //switch statements
// const grade = '50';

// switch(grade){
//     case '50':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break; 
//     case 'C':
//         console.log('you got an C!');
//          break;
//     case 'D':
//         console.log('you got an D!');
//          break;
//     case 'E':
//         console.log('you got an E!');
//          break;
//         default:
//             console.log('not a valid grade ');
// }


// variables & block scope
// let age = 30;

// if(true){
//     age = 40;
//     let name = 'mary';
// console.log("inside 1st code block:", age,name);

// if(true){
//     let age = 50;
//     console.log('inside 2nd code block',age)
// }
// }

// console.log("outside code block:", age);
// testing push