# Lesson 3

- Number Constructor

- number properties
  - Epsilon
  - MAX_VALUE
  - MIN_VALUE
  - MAX_SAFE_INTEGER
  - MIN_SAFE_INTEGER
  - POSITIVE_INFINITY
  - NEGATIVE_INFINITY



- Mumber Methods
  - Number.isFinite()
  - Number.isInteger()
  - Number.isSafeInteger()
  - Number.parseInt(n)
  - Number.parseFloat(n)
  - n.toString()
  - n.toExponential()
  - n.toFixed()
  - n.toPrecision()

<hr/>

- Type conversion and coercion

  - number

    - Number constructor
    - +n -> optimal
    - n\*1

  - string
    - String constructor
    - toString() -> optimal
    - n + ""

<hr/>



- Boolean constructor
  - let b1 = Boolean(12);
    console.log(b1);
    let b2 = Boolean(0);
    console.log(b2);


- truthy
    - {}
    - []
    - 42
    - "0"
    - "false"
    - -42
    - 12n
    - 3.14
    - -3.14
    - Infinity
    - -Infinity
    - etc...

- Falsy
  -  false
  -  0
  - -0
  -  0n
  - -0n
  -  ""
  - null
  - undefined
  - NaN


<hr/>


- if else

  - if (Truthy/Falsy) {
    console.log("Truthy")
    } else {
    console.log("Falsy");
    }

- else if
  - if (condition1) {
    // block of code to be executed if condition1 is true
    } else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
    } else {
    // block of code to be executed if the condition1 is false and condition2 is false
    }


<hr/>

 - || - first truthy, else the last;
 - && - first falsy, else the last;

<hr/>


 - Nullish coalescing operator ??
   - First non-nullish element, else the last;


<hr/>

 - Conditional (ternary) operator
   - condition ? expressionIfTrue : expressionIfFalse;

<hr/>

 - Switch case

<hr>

