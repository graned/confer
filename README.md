# Confer JS
Confer-JS is a tiny library that compares two ordered lists of objects and gives out the matched results.

## Installation
```bash
 npm install confer-js
```

## Example usage
#### Using an Object structure

```javascript
var confer = require('confer-js');
// Given a list of lists
var listOfLists = {
  list1: [{ e: 'element'}, 2, 'anotherElement'],
  list2: [{ e: 'element'}, 1, 'anotherElement'],
  list3: [{ e: 'element'}, 2],
}

// We want to find all lists with these elements in this order
var findList = [{ e: 'element'}, 2]
var result = confer(listOfLists, findLists)
```
#### Using an Array of Arrays structure
Confer-js also supports an _array of array_ structure, if that is the case, the usage will be as follows:
```javascript
var confer = require('confer-js');
// Given a list of lists
var listOfLists = [
  [{ e: 'element'}, 2, 'anotherElement'],
  [{ e: 'element'}, 1, 'anotherElement'],
  [{ e: 'element'}, 2]
]

// We want to find all lists with these elements in this order
var findList = [{ e: 'element'}, 2]
var result = confer(listOfLists, findLists)
```
#### Results
The result will contain a list matching the given data or an **empty object or array**, depending what was passed to the function:
```bash
// When listOfLists is an object.
{
  list1: [{ e: 'element'}, 2, 'anotherElement'],
  list3: [{ e: 'element'}, 2],
}
// When listOfLists is an array.
[
  [{ e: 'element'}, 2, 'anotherElement'],
  [{ e: 'element'}, 2]
]
```
