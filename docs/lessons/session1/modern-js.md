## Acronyms

- Javascript - JS
- Typescript - TS

## Modern Javascript (JS)
### Variables
Modern JS has three variable types: var, let, and const

'var' is the old way of using variables and is the same as not defining a variable type.

'let' is changeable like 'var' but it scoped to the containing code block

'const' is the same as let except that once assigned it can't be changed.

#### Example
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

