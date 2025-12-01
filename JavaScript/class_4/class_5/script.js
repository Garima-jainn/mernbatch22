// console.log(Hello);

// function -> set of line or block of code , which is used to perform a specific task
// -------------------------------------------------------------------------------------
/*Advantages - 
1. Readability - easy to understand 
2.Reusability - write one time and use multiple time anywhere in the program 
3. Performance - Due to the less Node. of lines our code execute fast */

//------------------------------------------------------------------------------------
/*Syntax of function - js support function declaration and defination at the point of creating function 

function functionName(parameter - without let ,var,const){
    #write your code here
}
if you want to execute a function we must need to call it */

//-----------------------------------------------------------------------------------
/*Types of function -
1. Normal/simple function - 
2. Arrow 
3. Annonymous 
4. Higher order 
5. callback 
6. IIFE
7. Pure 
8.Impure
 
Function expression is not a type of function.*/

//--------------------------------------------------------------------------------------------

//Example of function -> 4 cases

// ----------------------------------------------------------------------------------
//edge cases 
//1. agar function ke logic se jo o/p aaya hai use agar function ke bahar use krna h to us case me function ke andar 

// function addTwoNumber(a,b){
//     let c = a+b;
//     return c;
// }
// let ans = addTwoNumber(3,5);

// let addSalary= ans + 4000;
// console.log(addSalary);

// -----------------------------------------------------------------------------------
// function addTwoNumber(a,b){
//     let c = a+b;
// }
// let ans = addTwoNumber(3,5);
// // let addSalary= ans + 4000;
// // console.log(addSalary);
// console.log(ans);
 
// ------------------------------------------------------------------------------------------
// function addTwoNumber(a,b){
//     let c = a+b;
//     return c;
// }
// console.log(addTwoNumber(3,5));

// ------------------------------------------------------------------------
// function addTwoNumber(a,b){
//     let c = a+b;
//    }
// console.log(addTwoNumber(3,5));

//------------------------------------------------------------------------

 //agar function ka name bus aap console log ke andar krte h code me kahi bhi to us case me function ki poori body print hoti h

// console.log(addTwoNumber);
 

// console.log("arrow function");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function!!!!!!!!!!!!!!!!!!!!!!! 

/* arrow function->
its a concise or shorter syntex to perform a task.
arrow function do not support hoisting.*/

//Ex->
// normal function
// function addTowNo(x,y){
//     console.log(x+y);
// }
// addTowNo(3,6)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function without return !!!!!!!!!
// a)arrow function 
// let add=(x,y)=>{
//     console.log(x+y);
// }
// add(40,90)
// b)arrow function 2nd syntex
// let arr=(x,y)=>console.log(x+y);
// arr(4,6);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with return !!!!!!!!!
// simple function with return 
// function sumOfTwoNo(x,y){
//     return x+y;
// }
// let ans=sumOfTwoNo(8,9)// 1st way jab aap function ke op ko function ke bahar use karte hai
// console.log(ans)
// console.log(sumOfTwoNo(8,8));// 2nd way jab aap function ke op ko function ke bahar print karte hai

// arrow function 
// let sumOfThree=(x,y,z)=>x+y+z;

// let ans1=sumOfThree(1,2,3);
// console.log(ans1);
// console.log(sumOfThree(1,2,3));


// let sumOfFour=(a,b,c,d)=>{
//     return (a+b+c+d);
// }


// let ans2=sumOfFour(1,2,3,4);
// console.log(ans2);
// console.log(sumOfFour(1,2,3,4));



// / !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with no return but store in
//  variable and call inside console.log() !!!!!!!!!/

//  let multiply=(s,t)=>console.log(5*6);

//  let ans=multiply(5,6);
//  console.log(ans);
//  console.log(multiply(5,6)); //above 2 lines result is same as this one line but the result cannot be used anywhere outside the function if we write this line

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with multiple lines*/
// let complexCalculation=(x,y)=>{
//     console.log(x+y);
//     console.log(x-y);
//     console.log(x*y);
//     return x**y;
// }


// let output=complexCalculation(10,2);
// console.log(output);

// console.log(complexCalculation(10,2));

//  Meraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// in code execution phase - in normal function, hosting is supported and when we access function before defining it then we get whole  function body 
// addTowNo(3,4);
// function addTowNo(x,y){
//     console.log(x+y);
// }

//in case of arrow function hosting is not supported 
//case1- if we make function using let and const then hoisting is not supported but in case of var when we print functionName before declaration then undefined is given as o/p and when  we print functionName after declaration then function body is given as o/p.
// and at the time of function calling hoisting is not supported in any case.



//Hoisting -----

// console.log(add);            //reference error  
// let add = (x,y) => x+y;

// console.log(add);            //reference error 
// const add = (x,y) => x+y;

// console.log(add);                   //undefined
// var add = (x,y) => x+y;


// ------------------------------------------------------------without hoisting-----------------------------------------------------------
// let add = (x,y) => x+y;
// console.log(add);                    //function ki body 

// let add = (x,y) => x+y;
// console.log(add);                //function ki body 
          
// var add = (x,y) => x+y;
// console.log(add);                    //function ki body 

//  Meraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   callback("Garima");
// }

// processUserInput(greet);
