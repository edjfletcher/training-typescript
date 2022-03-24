# Session 1: ES6 in Typescript
> **Acronyms** \
> Javascript - JS \
> Typescript - TS

## Variables
 - var, let, const
In Javascript we can use the following variables
```javascript
var globalVariable
let scopedVariable
const myConst = 'cat';
```
But in Typescript we can also define what type of data will be in the variable
```javascript
var globalVariable: string;
let scopedVariable: number;
const myConst: string = 'cat';
```
Now any time we try to use these variables our IDE will tell us if we have expected the correct type

Doing the following will result in an IDE and compilation error
```typescript
scopedVariable = 'cat';
```
This is because we have defined it as a number.

## Arrow Function
The format in typescript is the same apart from parameter and return variable types.

```typescript
const isValid = (input: string): boolean => {
    return input.length !== 1;
}
```
Here we have defined the input to be a string and the output to be a boolean.

This will now give code hints when using the function as well as compliation errors if we try to use the function incorrectly.

If we create a function that doesn't return anything we can define the output as 'void'.

If we don't define a return type, then typescript will inspect the code to try and work out the return type on our behalf.

## Promise
The promise is a similar case, it looks the same apart from defining the return type.

We shall use the example from earlier
```typescript
let prom = new Promise<string>();

// Do something after promise returns
prom.then((result: string) => {
    // This arrow function will be called where 'result' is the returned data
})

// Do something if the promises errors
prom.catch((err) => {
    // This arrow function will be called if there is an errro throw where err contains the error data
})
```
Again the types will error on compilation as well as our IDE being able to help us diagnose.

Here the result and the promise need to have the same type otherwise an error will occur.

We don't have to define both. If you have defined it in your Promise then TS will already know the type for the then parameter.

## Arrays
Array allow you to define the content of the array. Here we define an array of strings.
```typescript
const arr: Array<string> = [];
```
You can also define them like this
```typescript
const arr: string[] = [];
```

They both result in the same thing. It is down to preference which one you use.

# Exercise
[Try the ES6 to Typescript conversion exercise](ts-exercise.md)