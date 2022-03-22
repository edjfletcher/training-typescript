# Convert this JS script to ES6

This is a message modal.
It will wrap the message in the HTML required for our model

```javascript
function messageModel(message) {
    output = '<div class="model>';
    
    function addHeader() {
        output += '<div class="model-header">Message</div>';
    }
    
    function content(message) {
        cont = '<div class="model-content">';
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

> This solution also has a few bad practises.
These are in here purposely to show scoping.
This code should not be used as an example of production ready coding.


<details><summary>Solution</summary>
<p>

```typescript
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

</p>
</details>
