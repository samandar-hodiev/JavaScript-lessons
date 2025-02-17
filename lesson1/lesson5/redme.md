## Functions

`Funksiyalar nima.?`

<hr>

`Funksiyalarga misollar`

- Math.trunc()
- Number.isInteger()
- isNaN()

<hr>

`Declaration and calling`

// function declaration <br>
function functionName(parameters) {
<br>
// statements
<br>
}

// calling
functionName(arguments);

<hr>

`Parameters vs arguments`

function helloFullName(firstName, lastName) {
<br>
let fullName = firstName + " " + lastName;
<br>
let res = "Hello " + fullName + " !"
<br>
console.log(res);
<br>
}

// firstName, lastName - parameters

// "Abdulaziz", "Programmer" - arguments

helloFullName("Abdulaziz", "Programmer");

<hr>

`Examples`

function say( ) {
<br>
console.log("Hello world !")
<br>
};

<br>

function perimetr(a, b) {
<br>
let p = 2 \* (a + b);
<br>
console.log(p);
<br>
};

<hr>

`Default values`

function showMessage(from, text = "no text given") {
<br>
alert( from + ": " + text );
<br>
}

<br>

function showMessage(from) {
<br>
if (typeof text == undefined) {
<br>
text = "no text given"}
<br>
alert( from + ": " + text );
<br>
}

showMessage("Ann"); // Ann: no text given

showMessage("Ann", undefined); // Ann: no text given

<hr>

`Naming`

- "get…" – return a value,
- "show…" – show something
- "is…" – return boolean,
- "check…" – check something and return a boolean, etc.
- "calc…" – calculate something,
- "create…" – create something,

<hr>

`Local scope`

function showMessage() {
<br>
var message = "Hello, I'm JavaScript!"; // local variable
<br>
alert( message );
<br>
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function



<hr>
<br><br><br>

## Anonymous functions

``Immediately Invoked Function Execution(IIFE)``

(function (parameters) {
    <br>
   // statements
   <br>
})(arguments);


<hr>

``Function expression``

let show = function() {
    <br>
    console.log('Function expression');
    <br>
};

show( );


<hr>

``Arrow function``

const add = (x, y) => { return x + y; };

const add = (x, y) => x + y;

