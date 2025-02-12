// Number Constructor
// console.log(new Number());

// // NUmber properties
// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);

// Mumber Methods
// console.log(Number.isFinite());
// console.log(Number.isInteger(12/7));
// console.log(isNaN(12));
// console.log(Number.isSafeInteger());
// console.log(Number.parseFloat('34 something'));

// let numberA = 123;
// console.log(typeof numberA);

// let res = numberA.toString();
// console.log(typeof res);

// console.log(Number.parseInt(-2/13));
// console.log(24/13);

// let number = 15.5;
// console.log(number.toFixed());

// let number = 12335546465768;
// console.log(number.toExponential());

// let number  = 123;
// console.log(number.toPrecision());






// Type conversion and coercion

// let number  = 1024;
// console.log(number);
// console.log(typeof number);

// let res = number.toString();
// console.log(res);
// console.log(typeof res);


// let str = String('string text')
// console.log(typeof str);

// let mix = 23+'text';
// console.log(mix);


// let number = 'text';
// console.log(+ number);






// Boolean constructor

// console.log(new Boolean());


// console.log(Boolean());


// --------- truthy --------- //

// {}
// []
// 42
// "0"
// "false"
// -42
// 12n
// 3.14
// -3.14
// Infinity
// -Infinity
// etc...


//  --------- Falsy --------- //

// false
// 0
// -0
// 0n
// -0n
// ""
// null
// undefined
// NaN

// console.log(Boolean(undefined));




// --------- if condition --------- //

// if (conditonA) {
//   // block code to be executed conditionA is true
// } else if (conditonB) {
//   // block code to be executed conditionB is true conditionA is false
// } else {
//   // block code to be executed conditionA is true conditionA and conditionB is false
// }


// if(0){
//   console.log("IF block is executed")
// }else if(0){
//   console.log("ELSE if block is executed")
// }else if(9){
//   console.log(2);
// }else if(0){
//   console.log(12)
// }else{
//   console.log("ELSE block is executed.!!!")
// }



// let fullName = 'Jahongit Ibragimov';

// if (fullName.length > 10) {
//   console.log("IF block is executed.!!!")
// } else if (fullName.length < 20) {
//   console.log(" 1 - ELSE IF block is executed.!!!")
// } else if (fullName.length >= 18) {
//   console.log(" 2 - ELSE IF block is executed.!!!")
// } else {
//   console.log("ELSE block is executed.!!!")
// }



// || - first truthy, else the last;
// && - first falsy, else the last;


// console.log(0 || -0);
// console.log(0 && 12);



// let fullName = 'Jahongit Ibragimov';

// if (fullName.length > 18 && fullName.length > 12) {
//   console.log("IF block is executed.!!!")
// } else if (fullName.length > 1 && fullName.length > 9) {
//   console.log("else if block is executed.!!!")
// } else {
//   console.log('Else block is executed')
// }


// console.log(undefined ?? []);






// Conditional (ternary) operator



// condition ? expressionIfTrue : expressionIfFalse;


// let res = 13 >= 13 ? 20 : "Error"

// console.log(res);




// --------------  Switch case  -------------- //

// let number;

// switch (number = 1) {
//   case 1:
//     number = 1
//     console.log('Case 1 is executed');
//   break;
//   case 2:
//     number = 2
//     console.log('Case 2 is executed');
// }



// let days;

// switch (days = 3) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba")
//     break;
//   default:
//     alert("BUNDAY XAFTA raqamga mos xafta kuni mavjud emas.!!!")
// }












s