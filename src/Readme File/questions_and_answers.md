
 
###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`


#### Answer: ?


- A
Since greeting = empty object is given here, the value of greeting will be {}



###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`



#### Answer: ?

- C

Here sum=(a,b) since a and b are added in return and the value of b is given in string so it will sit side by side without adding.



###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`



#### Answer: ?
- C 
Info = favoriteFood has index value 0. In the next line, whatever value is in info.favoriteFood, food will have 0 value in index, so it will be and C



###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`


#### Answer: ?

- B 
 Here the name parameter has been called inside the function which has no value so if you return it you will see undefined so the answer will be B



###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4


#### Answer: ?


- C
This code snippet is a JavaScript function that counts the number of non-zero elements in an array. It first declares a variable count and initializes it with 0. Then, it loops over the array nums using the forEach() method and adds 1 to count for each non-zero element. Finally, it prints the value of count to the console.






