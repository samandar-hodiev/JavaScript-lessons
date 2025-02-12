

# Array

<br>

``What is array ?``

<hr>

<br><br>

``Creating``

    const array_name = [item1, item2, ... ];

    const cars = ["Saab", "Volvo", "BMW"];

    const cars = [];
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";


    const cars = Array("Saab", "Volvo", "BMW");

    let scores = Array(10); // 10 empty items

<hr>
<br><br>

`` typeof of Array ``

<hr>
<br><br>

``Changing``

    arrayName[index] = value;

    const fruit = ["apple", "banana", "cherry"];

    fruit[0] = "limon";

<hr>
<br><br>

``Adding``

    const fruits = ["Banana", "Orange", "Apple"];

    fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits



    const fruits = ["Banana", "Orange", "Apple"];

    fruits[6] = "Lemon";  // Creates undefined "holes" in fruits

<hr>
<br><br>

``Deleting``

     delete arr[index]

<hr>
<br><br>

``Destructing``


    let arr = [1, 3, 5, 7];

    let [el1, el2, el3, el4] = arr;

<hr>
<br><br>

``Spread Array``

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let arr = [...arr1, ...arr2];

<br>

<hr>
<br><br>

``Iteration``

    for

    for in
    
    for of


<hr>
<br><br>

``Array constructor``

     Array.isArray()

<hr>
<br><br><br><br><br>

## Array methods

``Basic Array Methods``

    Array length 
    Array toString()
    Array at()
    Array join() 
    Array pop()
    Array push()
    Array shift()
    Array unshift()
    Array delete()
    Array concat()
    Array copyWithin()
    Array flat()
    Array splice()
    Array toSpliced()
    Array slice()

<br><br>

``Array Find and Search Methods``


    Array indexOf()
    Array lastIndexOf()
    Array includes()
    Array find()
    Array findIndex()
    Array findLast()
    Array findLastIndex()


<br><br>
``Array Sort Methods``

 Alphabetic Sort

    Array sort()
    Array reverse()
    Array toSorted()
    Array toReversed()
    Sorting Objects

Numeric Sort

    Numeric Sort
    Random Sort
    Math.min()
    Math.max()
    Home made Min()
    Home made Max()  



<br>
<br>

``Array Iteration Methods``

    Array forEach
    Array map()
    Array flatMap()
    Array filter()
    Array reduce()
    Array reduceRight()
    Array every()
    Array some()
    Array from()
    Array keys()
    Array entries()
    Array with()
    Array Spread (...)