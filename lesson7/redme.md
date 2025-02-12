
# String
 <br> 

``quotes``

    let doubleQuote = "O'zbekiston buyuk davlat !";

    let singleQuote = "\"NT\" -> NAJOT TA'LIM";

    let backtics = `O'zbekiston "buyuk" davlat`;

<hr>
<br><br>

``Using slesh``

    - `\'` → `'`
    - `\"` → `"`
    - `\\` → `\`
    - `\n` → new line
    - `\t` → tab

<hr>
<br><br>

``Back-Tics``
   
    - Template literals

    - Template Strings


<hr>
<br><br>

``String interpolation``

    let fullName = "Nodirbek";
    let isMarried = false;
    let birthYear = 1999;

    let res = `${isMarried ? "2 boshli" : "Bo'ydoq"} ${fullName} hozir ${2023 - birthYear} yoshda.`


<hr>
<br><br>


``Length``

    let fullName = "Nodirbek";

    console.log(fullName.length);


<hr>
<br><br>

``Accessing``

    let fullName = "Nodirbek";

    console.log(fullName[0]);

    console.log(fullName[5]);

    console.log(fullName['10'])

    console.log(fullName[fullName.length - 1])

<hr>
<br><br>

``Comparison``

    console.log('Nodirbek' > "Diyorbek")

    console.log( 'a' > 'Z' ); // true

    console.log( "Z".codePointAt()); // 90
    console.log( "z".codePointAt()); // 122

    console.log(String.fromCharCode(109)) // m

<hr>
<br><br>

``Iteration``


    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
      }

    for (i in str) {
	   console.log(i)
    }


    for (el of str) {
	   console.log(el)
    }


<hr>
<br><br>

``Spread operator``

    let str = "Nodirbek";

    let arr = [...str];

    console.log(arr);


<hr>
<br><br><br><br>

# String methods

``Basic String Methods``
  
    String length
    String charAt()
    String charCodeAt()
    String at()
    String [ ]
    String slice()
    String substring()
    String substr()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String padStart()
    String padEnd()
    String repeat()
    String replace()
    String replaceAll()
    String split()

<hr>
<br><br

``String Search Methods``

    String indexOf()
    String lastIndexOf()
    String search()
    String match()
    String matchAll()
    String includes()
    String startsWith()
    String endsWith()


<hr>
<br><br


``eval()``

    let exp = '(12 - 4 + 6 * 3) / 2';

    let res = eval(exp);

    console.log(res);