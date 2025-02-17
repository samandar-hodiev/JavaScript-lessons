# Lesson 8

<br><br>

# Object

<br><br>

``What is it?``

<hr>
<br><br>

``Creating``

     let person = {
       firstName: "John",
       lastName: "Doe",
       age: 30,
       subjects: ["math", "physics", "history"],
       isMarried: false,
       isDiplom: NaN,
       test: undefined,
	   2019: "Enter to the university",
       2011: "Olympiads first position",
       university: {
       name: "Unverse",
       course: 4,
       GPA: 4.72,
       },
       symbol: Symbol(),
       fullName: function () {
       return "John Doe";
      }
     };


<hr>
<br><br>

``Accessing``

     object.property

     object[property]


<hr>
<br><br>

``Modifying``

    object.property = value

    object[property] = value

<hr>
<br><br>

``Adding``

    object.property = value

    object[property] = value

<hr>
<br><br>

``Deleting``
 
    delete object.property


<hr>
<br><br>


``Property shorthand``


    function createMachine(name, status) {
      return {
          name: name,
          status: status
        }
    }




    function createMachine(name, status) {
       return {
          name,
          status
       }
    }    



<hr>
<br><br>


``Methods``

     let person = {
         firstName: 'John',
         lastName: 'Doe',
         greet: function () {
         console.log('Hello, World!');
       }
    }


<hr>
<br><br>


``Method shorthand``


    let person = {
        firstName: 'John',
        lastName: 'Doe',
        greet() {
        console.log('Hello, World!');
      }
    }

    person.greet();


<hr>
<br><br>



 ``this keyword``


    let person = {
        firstName: 'Jahongir',
        lastName: 'Teacher',
        greet() {
            console.log(`Hello, ${this.firstName}!`);
          },

        getFullName() {
           return this.firstName + ' ' + this.lastName;
          }  
    }


    console.log(person.getFullName());


<hr>
<br><br>



``in keyword``


<hr>
<br><br>


`` ``?.`` optional chaining``

    const obj={
      color:'red',
      width:100,
      height:200,
      weight:40000
    }

    console.log(obj?.max?.length)


<hr>
<br><br>


``Destructing``

    let { pr1: var1, pr2: var2, pr3: "Default", pr4: { pr41: var41, pr42: var42 } } = obj;

<hr>
<br><br>

``Spread operator ``…`` ``

    let obj1 = {a: 1, b: 2};
    let obj2 = {c: 3: d: 4};

    let obj = {...obj1, ...obj2};


<hr>
<br><br>

``Iteration``
    
    for in


<hr>
<br><br>

``Object constructor``


<hr>
<br><br>

`` Object methods ``

