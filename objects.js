// object litreals

let user = {
    name: 'mary',
    age: 30,
    email: 'mary@studentatpc.co.ug',
    location: 'gulu',
    blog: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user .name);

user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'elvis';
console.log(user['name']);