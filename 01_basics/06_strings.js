const myname = "waseem";
const stringCount = 50;

// console.log(myname[2])

//string interpolition

const myString = new String("hitesh");
console.log(myString);

//string length
console.log(myname.length);

//string accessing characters
//note -> strings are immutable you cannot change the character directly
//str[0] = 'K'; //  This wont work

//charAt() method

console.log(myname.charAt(3));

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

const newString = "     my     name is   waseem         ";
console.log(newString);
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());



//?searching in the strings


const newstr3434 = "Hello, JavaScript!";
console.log(str.includes("Java")); // true
console.log(str.indexOf("Java")); // 7
console.log(str.lastIndexOf("o")); // 4
console.log(str.search(/script/i)); // 10 (case-insensitive search)
console.log(str.match(/a/g)); // ['a', 'a']
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true


//indexOf() & lastIndexOf()

let str = "JavaScript is amazing!";
console.log(str.indexOf("Script")); // 4
console.log(str.lastIndexOf("a")); // 16

//includes()
//returns true or false if substring exists

console.log(str.includes("is")); //true

//📌 startsWith() & endsWith()

console.log(str.startsWith("javascript")); //false
console.log(str.startsWith("JavaScript")); //true

//search() method it searches a string in a string and returns  the position of the match
const string2="please locate where locate occurs"
string2.search(/locate/g) // we can use  the regex into the it 
string2.search("locate")  


//match() it returns an array if string matches


console.log("match result found",string2.match("locate"))
// output
// match result found [
//   'locate',
//   index: 7,
//   input: 'please locate where locate occurs',
//   groups: undefined
// ]








//!Extracting Parts of a String

// 📌 slice(start, end)
//it extract a part of string
//positve values starts  from left and negative starts from end
//ending value is not inclusive

let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"   last index is not included
// console.log(text.slice(-2,10));
console.log(text.slice(-4));
console.log(text.slice(-4, 10));

// substring(start, end)
//similar to slice but doesnot support negative values 
//last index is also not  included in it

console.log(text.substring(0, 4)); //Java
console.log(text.substring(4, 0)); //Java

//replacing text
//  replace() & replaceAll()
// it returns a new string does not change the actual string 

let newstr = "I love JavaScript!";
console.log(newstr.replace("I", "waseem")); //waseem love Js
console.log(newstr.replace("love", "waseem")); //spaces must be added carefuuly it counts

// replaceAll (ES2021+)
let sentence = "apple, apple, apple,mango,mango,orange,orange";
console.log(sentence.replaceAll("apple", "banana")); // banana, banana, banana,mango,mango,orange,orange
console.log(sentence.replace("apple", "mango")); // it just replace the first match in the string

//mango, apple, apple,mango,mango,orange,orange

// Regular Expressions with replace()

console.log(sentence.replace(/apple/, "my"));
// we can change globally all using (g) and for case senstitve use(i)
console.log(sentence.replace(/apple/gi, "change"));
//now it will work for the all and it will not resolve case sensitive issue





//*  Splitting & Joining Strings

//  split() (Convert String → Array)
//it converts string into array
let newsentence = "Learn JS with mastery";
console.log(newsentence.split(""));
//[
//     'L', 'e', 'a', 'r', 'n',
//     ' ', 'J', 'S', ' ', 'w',
//     'i', 't', 'h', ' ', 'm',
//     'a', 's', 't', 'e', 'r',
//     'y'
//   ]

//spliting string on the basis of  space " "
console.log(newsentence.split(" ")); // [ 'Learn', 'JS', 'with', 'mastery' ]
console.log(newsentence.split("e")); //[ 'L', 'arn JS with mast', 'ry' ]

//📌 join() (Convert Array → String)
// we can join the array back on the basis of spaces" " and every character""
//it will join each item of string with the provided space , or number or character
const splitArray = newsentence.split(" ");
console.log(splitArray);
const convertedString = splitArray.join(" ");
console.log(convertedString); //Learn JS with mastery
console.log(splitArray.join("")); //LearnJSwithmastery
console.log(splitArray.join("9")); //Learn9JS9with9mastery
console.log(splitArray.join("-")); //Learn-JS-with-mastery
console.log(splitArray.join("_")); //Learn_JS_with_mastery

// Advanced: Performance Optimization
//📌 Concatenation (+) vs Template Literals vs join()

//for small operations + is fine
let str1 = "Hello" + " " + "World!";
console.log(str1);

// for  large-scale operations, use .join():
let arr = ["Hello", "World"];
console.log(arr.join(" "));

//Escape Characters (\)
console.log('This is a "quote" inside a string');
console.log("New line \nSecond line");
console.log("Tab \tSpace");

// Interview & Real-World Questions

// Reverse a String
const StringTest = "My name is waseem";
const arrayString = StringTest.split("");
console.log(arrayString);
let reverseString = "";
for (let index = arrayString.length - 1; index >= 0; index--) {
  reverseString += arrayString[index];
}
console.log(reverseString);
console.log(typeof reverseString);

//checking a string is palindrome

function isPalindrome(str) {
  let reverse = str.toLowerCase().split("").reverse().join("");
  if (reverse === str) console.log(`${str} is Palindrome`);
  else console.log(`${str} is not Palindrome`);
}

isPalindrome("ada");

//Count Occurrences of a Character

function countCharac(str, char) {
  const countArray = str.split(char);
  console.log(countArray);
  console.log(countArray.length - 1);
}

countCharac("waseem", "e"); //2

//Capitalize the First Letter of Each Word

function CapitalizeFirstLetter(str) {
  let array = str.split(" ");
  const uppercase = array.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  console.log(uppercase.join(" "));
}

CapitalizeFirstLetter("waseem is good boy");

//includes() and match()

//includes(searchString)
//includes return regular expresssion

const myNameString = "my name is waseem";

console.log(myNameString.includes("waseem"));
console.log(myNameString.includes("My"));

//match () can accept the regular expression

const result = myNameString.match(/my/i);
console.log(result);
console.log(result ? true : false);




function repeatingCharacter(str){
    let myArray=str.split('')
    for(i=0;i<myArray.length;i++)
    {   isRepeating=false
        for(j=0;j<myArray.length;j++)
        {
            if(i!==j && myArray[j]===myArray[i])
            {
                  isRepeating=true
            }
        }
        if(isRepeating)
        {
            console.log(`${myArray[i]} is repeating character in string`)
        }
        else{
            console.log(`${myArray[i]} is non repeating character in string`)
        }
    }
}

repeatingCharacter("waseemma")




function removingRepeatingCharacters(str){
 
    console.log("first split",str.split(''))
    for(i=0;i<str.length;i++)
    {
        // console.log(str[i])
        
        for(j=0;j<str.length;j++)
        {
            if(i!==j && str[i]===str[j])
            {
                str= str.replace(str[i],' ')
            }
        }
    }
    let result=str.split(' ').join('')
    console.log(result)
}

removingRepeatingCharacters("waseeasdfsdfsdfmsdfasdfasdf")