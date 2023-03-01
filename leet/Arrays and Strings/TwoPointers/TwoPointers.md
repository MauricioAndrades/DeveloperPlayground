# Two pointers

General approach for two pointer problem:

```javascript
const twoPointers = (arr) => {
    const left = 0;
    const right = arr.length - 1;

    while (left < right) {
        // do some logic depending on the problem
        // do some more logic to decide
        // 1. left++
        // 2. right--
        // 3. or both
    }
};
```