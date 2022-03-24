# Convert ES6 to Typescript
Building on our answer before, let's convert our last answer into Typescript.
```javascript
const messageModel = (message) => {
    var output = '<div class="model>';

    const addHeader = () => {
         output += '<div class="model-header">Message</div>';
    }

    content = (message) => {
        let cont = '<div class="model-content">';
        cont += message;
        cont += '</div>';

        return cont;
    }

    addHeader();
    output += content(message);
    output += '</div>';

    return output;
}
```
# Solution
```typescript
const messageModel = (message: string): string => {
    let output: string = '<div class="model>';

    const addHeader = (): void => {
         output += '<div class="model-header">Message</div>';
    }

    const content = (message: string): string => {
        let cont = '<div class="model-content">';
        cont += message;
        cont += '</div>';

        return cont;
    }

    addHeader();
    output += content(message);
    output += '</div>';

    return output;
}
```
You can see that the solution is very similar. Typescript is meant to look very similar to vanilla JS.

In this example Typescript will be checking the types that are passed around to ensure that they line up correctly.

As an example, if you change one of the string typings to number your IDE will highlight the error.

# Next steps
[Getting started with a Typescript project](getting-started.md)