
 
###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`


#### Answer: 

- A 

A variable named greeting is declared after the let command, but no value is assigned to it. As a result, the value of the greeting variable will be "undefined". However, the "greetign" variable is not declared inside the console.log() command, resulting in a reference error.


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


#### Answer: 

- C 

The sum(1, "2") function returns the sum of two numbers. But "2" is a string, not a number. Therefore, JavaScript cannot automatically convert the string "2" to a number. Consequently, the sum(1, "2") function will return NaN.



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


#### Answer: 
- A 
Because favoriteFood is a reference to food. Even if the value of food changes, the value of favoriteFood will not change.



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

#### Answer: 

- B 
When calling the sayHi() function without any arguments, it will use the default value undefined for the name parameter. Therefore, the sayHi() function will return the string Hi there, undefined.




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



#### Answer: 

- A
The forEach() loop executes the callback function for each element of the nums array. In this case the callback function checks if the element is equal to 0. If not equal to 0, the callback function adds 1 to the count variable.
Since the nums array has 4 elements, the forEach() method will execute the callback function 4 times. This means count += 1; The line will be executed 4 times and the count variable will be incremented by 1 each time.
Therefore, the value of the count variable will be 1 after the forEach() method is executed.







