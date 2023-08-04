# Javascript in Nodejs

## Javascript in Nodejs
- Basics
```javascript
let username = 'Jesus';
let age = '25';
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
    name: 'ryan',
    lastname: 'ray'
}
const PI = 3.1415

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);
```

```javascript
>>> return
Jesus
25
false
[ 10, 20, 30 ]
{ name: 'ryan', lastname: 'ray' }
3.1415
```

- Condisionals and console log
```javascript
const age = 17

if (age >= 18 ){
    console.log("you are an adult");
}else if (age >= 13){
    console.log("You are an teenager");
}else{
    console.log ("You are a child");
}
```

```javascript
    >>> return
    You are an teenager
```

- Loops
```javascript
const names = ['joe', 'john', 'marc'];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
```
```javascript
    >>> return
    joe
    john
    marc
```

- Loops and Functions
```javascript
const names = ['joe', 'john', 'marc'];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
function showUserInfo(userName, userAge){
    return `The userName is ${userName}, the user is ${userAge} years old`
}
console.log(showUserInfo('Joe', 30));
console.log(showUserInfo('Maria', 50));
```
```javascript
    >>> return
    joe
    john
    marc
    The userName is Joe, the user is 30 years old
    The userName is Maria, the user is 50 years old
```

- Loops, functions and reduction
```javascript
const names = ['joe', 'john', 'marc'];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
const showUserInfo = (userName, userAge) => `The userName is ${userName}, the user is ${userAge} years old`
console.log(showUserInfo('Joe', 30));
console.log(showUserInfo('Maria', 50));
```
```javascript
    >>> return
    joe
    john
    marc
    The userName is Joe, the user is 30 years old
    The userName is Maria, the user is 50 years old
```