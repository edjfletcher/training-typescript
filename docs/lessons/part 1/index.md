# Part 1

## Why use TS

## ES6 in Typescript
 - var, let, const
In Javascript we can use the following variables
```javascript
var globalVariable
let scopedVariable
const semiImmutableScopedVariable = 'cat';
```
But in Typescript we can also define what type of data will be in the variable
```javascript
var globalVariable: string;
let scopedVariable: number;
const semiImmutableScopedVariable: string = 'cat';
```
Now any time we try to use these variables our IDE will tell us if we have expected the correct type

Doing the following will result in an IDE and complilation error
```typescript
scopedVariable = 'cat';
```
This is because we have defined it as a number.

 - arrays
```typescript
const arr: Array<string> = [];
```

 - arrow function

## Typescript Basics
 - Interface
 - Types
 - Interface VS Type

## Challenge
 - Challenge - convert JS to TS
 - Show how I would convert

## Do it yourself
 - Getting started
 - Note we will be ignoring how to add to current project in this session


 - Q&A