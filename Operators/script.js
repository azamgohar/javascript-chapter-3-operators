// Operators✅

// These are the few operators we use!
// + - * / ** 
// = == ===
// <> <= >= ! != !== !!
// && ||
// ?:

// and these are classied into these types:
// Arithmatic, Comparison, Logical,Assignment, Unary, Ternary

// Arithmatic Operators:✅
    
// + 💹
// It works to perform addition between numbers and concatenation between strings.

// - 💹
// It uses to subtract numbers or mathematical equations!

// * 💹
// It uses to multiply two number-values.

// /
// It uses to divide numbers.

// % 💹
// for example 15%4 so it will multiply 4 maximum times when the maximum answer is less then the upper value which is 15 so it will reach 4 muyltiply  3 equal 12 and 3 is leftover so the three wil be the answer of this 15%4. because it is percentage inmaths but modulus  in JS so, 15%4 = 3

// let a = 15%4;

// ** 💹
// It usesto give exponent power numbers like: 
// in js: 3**3 = 27;
//  in maths: 3³ = 27




// Comparison Operators: ✅

// == 
// It  uses to compare two values that are they equal? for example
// 12 == 13;
// so the answer will be false because 12 is not equal to 13. but it has a problem for  example
// 12 == "12";
// It will return true It  won'tcheck that first value is a number and second one is a string it just do comparison softly and print the answer. without  verifying value's types. so it is not strict comparison operator.


// === 💹
// It also works tocompare two values that are they equal? but the thing is it verifies and properly check values types also so If we'll write 
// 12 === "12"; 
// so the answer will be false because second value is a string and first value is a number. so it is strict comparison operator.


// != 💹
// It works exactly opposite to ==, because it compare that two values are not equals! for example
// 12 != 13 // true
// but still same problem like == it is also not strict comparison operator it doesn't check the value's types. for example
// 12 != "12" // true


// !== 💹
// It works same like != but it checks and verifies both value's types while comparison so it is strict comparison operator. for example
// 12 !== "12"; // false


// < 💹
// By using it we compare two values that, Is the first value lesser then the second one?
// 12<13 // true
// 12<12 // false // because 12 is not less then 12 it is equal!


// > 💹
// By using it we compare two values that, Is the first value greater then the second one?
// 12>11 // true
// 12>12 // false  // because 12 is not greater then 12  it is equal.

// <=
// By using it we compare two values that, Is the first value less then or equal to the second one? which means If the both values are equal it will still work and it also works for less then.
// 12 <= 12; // true
// 12 <= 9; // false // because 12 is not equal and also not less then 9.


// >=
// By using it we compare two values that, Is the first value greater then or equal to the second one? which means If the both values are equal it will still work and it also works for greater then.
// 12 >= 12; // true
// 12 >= 15; // false // because 12 is not equal and also not greater then 15.


// Assignment Operators:✅
// = 💹
// It uses to assign values of our variables for example: 
// let  a = 12;


// += 💹
// It updates the already existed variable's value by adding  a value into it and then save it in the variable again for example: 
// a += 3; // so it addes 3 into our a's value which  is 12 so the value of a  is now  15.
// a = a + 3; // actual form


// -= 💹
// It updates the already existed variable's value by subtracting a value from it and then save it in the variable again for example: 
// a -= 9; // so it subtracts 9 from our a's value which  is 15 so the value of a  is now  6.
// a = a - 9; // actual form


// *= 💹
// It updates the already existed variable's value by multiplying a value with it and then save it in the variable again for example: 
// a *= 3; // so it multiplies 3 with our a's value which  is 6 so the value of a  is now 18.
// a = a * 3; // actual form


// /= 💹
// It updates the already existed variable's value by dividing a value with it and then save it in the variable again for example: 
// a /= 2; // so it divides 2 with our a's value which  is 18 so the value of a  is now 9.
// a = a / 2; // actual form


// %= 💹
// It updates the already existed variable's value by dividing a value with it and and then save the leftover value in the variable again for example: 
// a %= 2; // so it divides 2 with our a's value which  is 9 so the value of a  is now 1.
// a = a / 2; // actual form

// Logical Operators: ✅

// && (AND) 💹
// For example:
// true && false // false (truthy falsy example)
// 16>9 && 10>12 // false (because 16 is greater then 9 so the first value will be true but still 10 is not greater then 12 so the second will also be false and finally the answer is false)

// false && true // false (truthy falsy example)
// 15<13 && 15>12 // false (because 15 is not lesser then 13 so the first value will be false and also 15 is greater then 12 so the second will also be true and finally the answer is false)

// false && false // false (truthy falsy example)
// 12>13 && 10>12 // false (because 12 is not greater then 13 so the first value will be false and also 10 is not greater then 12 so the second will also be false and finally the answer is false)

// true && true // true (truthy falsy example)
// 4>2 && 10>6 // true (because 4 is greater then 2 so the first value will be true and also 10 is greater then 6 so the second will also be true and finally the answer is true)

// so it means && checks that If both side's conditions are true then answer will be true and false for false false, true flase, false true. 


// || (OR) 💹

// It checks that If at least any one side's value or both  values are true then it will return true and only when both side values are falsy then it will return false 

// ! (NOT) 💹

// NOT basically changes the value's behavior If truthy then into falsy and If falsy then into truthy.
// For example, when we write this is console: 
// !!12
// so it tells us the nature of 12 is true, but how? because it changes  our value's nature which means here as 12's nature into falsy from truthy and then again change that because here we're using NOT two times so it will change the behavior of our value two times and  that will automatically return it's current value, because  it reverse  it andthen again reverse so the second reverse takes it to the first initial condition.


// Unary Operators: ✅

// Unary Operators are those which works on one single value.

// + - ! typeof ++ --

// + 💹
// adding + before our string will converts it into a number example: 
// +"5" = 5;
// +"Azam" = NaN; // Not a number because that tried to change that string  into a numberbut in our string there was an  alphabetic word which can't converts into number so itreturns NaN.

// - 💹
// adding - before our string will convert  it into a number and also will add - before it example:
// -"5" = -5;
// -"Azam" = NaN;  // Not a number because it can't br turned into a number and adding the subtraction sign before it was soppose to be  done after converting it into number and this is not a number so - sign is also not here

// ! 💹
// NOT simply changes the value's behavior type truthy to falsy and falsy to truthy.

// typeof 💹
// It uses to know the value's type for example:
// typeof 5 = Number;
// typeof "5" = String;

// ++ 💹
// If we add ++ before our value it will do a pre-increment in it. (pre-increment value means value pehle hi badha dena) and If we add ++ after our value it will do a post-increment in it. (post-increment value means pehli baar run hone per puraani value return hoti hai lekin uske baad value increase ho chuki hoti hai) Example:
// let a = 5;
// ++a; = 6 // It immediately upgrade a's value
// a++; = 5 // It is also changed but as per it's usual behavior it runs as it is for the first time but behind the scene it's  value is 6 now.example:
// a++ +  2 = 8; // so a++ increase it's value to 6 then we're adding 2 into our value after increment so the answer will be 8.

// -- 💹
// same as++ If we add -- before our value it will do a pre-decrement in it. (pre-decrement value means value pehle hi kam kar dena) and If we add -- after our value it will do a post-decrement in it. (post-decrement value means value baad mein kam karna, 1 baar chal jaane ke baad next time per) Example:
// let a = 5;
// --a = 4; // It immediately decrease a's value
// a-- = 5; // It is also changed but asper it's usual behavior it runs as it is for the first time but behind the scene it's  value is 4 now.example:
// a-- + 2 = 8; // so a-- decrease it's value to 4 then we're adding 2 into our value after decrement so the answer will be 6.

// Ternary Operator ✅

// ?: 💹

// In this operator we have to define that If our condition will be true then run some blah blah code and  If our condition is false then run some blah blah code Example:

// 12>13 ? console.log("Hey Hey") : console.log("Yaahoooo!");

// This line simply do that, 12 is greater then 13 which is not because 13 in bigger, but it check the condition's answer's behavior if it is true then it runs the code which is after the ? and If the condition's answer's behavior is false then it will run the code which is after :, so here it will print Yaahoooo! in the console.

