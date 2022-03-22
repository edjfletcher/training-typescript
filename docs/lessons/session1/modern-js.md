# Modern Javascript (JS)
> **Acronyms** \
> Javascript - JS \
> Typescript - TS

Modern JS is commonly everything from ES6 standards onwards.

ES6 is commonly the shorthand way of saying modern JS. This is the term we shall use going forward

## Variables
Modern JS has three variable types: var, let, and const

'var' is the old way of using variables and is the same as not defining a variable type.

'let' is changeable like 'var' but it scoped to the containing code block

'const' is the same as let except that once assigned it can't be changed.

### Example
old JS
```javascript
myVar = 1;
function change() {
    myVar = 2;
}
change();
// myVar == 2
```
new JS
```javascript
let myVar = 1;
function change() {
    let myVar = 2;
}
change();
// myVar == 1
```
let scopes the second variable to the change function instead of globally.
The second variable has nothing to do with the first one and is deleted once the function call ends.

It is good practise to only use let and const.

## Functions
The newer way of writing functions in JS is to use arrow functions

These are anonymous functions and need assigning if they are to be used.

The syntax might be a bit odd at first but they are far better once you get used to them.

Arrow functions are the de facto way of writing functions in modern JS

Old functions
```javascript
function myFunc(parameters) {
    // do stuff
}
```
The same function in ES6
```javascript
const myFunc = () => {
    // do stuff
}
```

One important difference of arrow functions is that they have corrected the scope on them.

This means that the **this** keyword works as it does in other languages instead of referring to the caller as it does in old JS

This is primary reason that they are used for modern JS

## Promises
Promises have existed before ES6. There are many libraries that introduce them into Javascript

In ES6 they have brought them into the core language. This means anything that uses promises should use the language promise instead of a library.

The only difference here is likely to be terminology. We will assume knowledge of a promise and will just cover the language used.

```javascript
let prom = new Promise();

// Do something after promise returns
prom.then((result) => {
    // This arrow function will be called where 'result' is the returned data
})

// Do something if the promises errors
prom.catch((err) => {
    // This arrow function will be called if there is an errro throw where err contains the error data
})
```
# Exercise
[Why not try these exercises out](es6-exercise.md)