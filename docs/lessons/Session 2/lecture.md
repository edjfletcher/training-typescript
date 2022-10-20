| ES6              | TS                         |
|------------------|----------------------------|
| String Literals  |                            |
| Truthy + falsy   |                            |
|                  | Unions                     |
| Objects          | Same, lead into interfaces |
|                  | Interfaces (and structs)   |
|                  | Function Interfaces        |
| Map + Set        | Content types              |

# Lecture
## String Literals
___
String literals are the Javascript way of performing variable injection into strings.

The usage is simple. We have to use the backtick `` instead of quotes, and we use dollar and brackets for the variables `${}`

As an example we could have
```typescript
const name:string = 'Bob';
console.log(`Hello, ${name}`);
```

## Truthy & Falsy
___
JS will do type conversion on our behalf. Anything that isn't considered false will be considered true.

> **N.B.** Type conversion logic differs to other languages, so it is best to check language specifics before using.

The following are considered false by JS.
 - `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`

**Further reading:** [Mozilla Truthy + Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

## Unions
___
This is our first part of this session that is typescript only.

Unions are a way of defining multiple possible types. To define we separate our types using a pipe `|`

An example of this might be if we want either a string or a number
```typescript
let page: string | number;
```

The use of unions can be confusing with simple examples. Once we start developing more complicated solutions their use case becomes clearer.

## Objects
___
Objects in JS are very simple. Anyone who has used JSON before will be very familiar with the format
```javascript
const person = {
    "name": "Bob"
}
```
In Typescript we can define how we want our object to look before we initialise it. We do this using an interface.

If we define the above it would like
```typescript
interface Person {
    name: string;
}

const person: Person = {
    "name": "Bob"
}
```
In the Typescript community it is standard practise to end your interface names with a capital I.
 The above would therefore be `PersonI`

Interfaces can also be used to define class definitions. If we extend the example here it might look like
```typescript
interface Person {
    name: string;
    getName: () => string;
}
```
Once a method has been defined the interface can no longer be used to define a data object. Definitions for data objects are better known as Structs, to mean any object without methods.
Although Typescript does diferentiate between interfaces and structs in my own code I find it useful to do so. I therefore end Struct definitions with the work Struct for clarity.
```Typescript
interface PersonStruct {
    name: string;
}

interface PersonInterface {
    name: string;
    getName: () => string;
}
```

We can also define functions. In Typescript we can do this using either the `type` keyword or `interface`
If we define a validation function they would look like
```typescript
type IsValid = (value: string) => boolean;

interface IsValid {
    (value: string): boolean;
}
```
Both of these are used the same. As Typescript has evolved it uses the type keyword less and less. I therefore recommend using interface method. However, the choice is yours.

## Map & Set
___
Map and Set are used for data storage.
A Map holds a value by an index. You can add, get, and check it has by that index.
```javascript
const map = new Map([
    [index, value]
]);

or

map.add(index, value);
```
A Set doesn't have an index. It instead ensures that all values are unique.
```javascript
const set = new Set([value]);

or

set.add(value);
```

These are further useful in Typescript as we can define the type of both the value and the index. Continuing our validation example above we can create a Map like so
```typescript
const map = new Map<string, IsValid>([
    ['hasLengthOf6', value => value.length]
]);
```

This is fairly compact but we create a new Map. We tell it that the index is of type string, the value is of type IsValid function.

We then add our first value, the index of `hasLengthOf6` and we define the arrow function inline with the IsValid interface.

Hopefully here you can see how we would start to build these features together to define exactly what we want our code to do and be.