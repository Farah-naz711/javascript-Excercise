// Chapter One
// Question1
// alert("Hello World")
// Question2

// alert("Error! Enter a valid password")
// Question3
// alert("Welocome to JS land...\nHappy Coding!");
// Question4
// alert("Welocome to JS land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs");
// Question5
// alert("Hello.... I can run JS through web browser's console")
// Question 6 Panding

                    // Chapter two
// Q1. Declare a variable called username
// var username;
// Q2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
// var myName;
// myName="Farah Naz"
// Q3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
// var message="Hello World"
// alert(message)
// Q4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
// var name="Johne Doe"
// alert(name)
// var age="15 years old"
// alert(age)
// var skill="Certified Mobile Application Development"
// alert(skill)
// Q5. Write a script to display the following alert using one JS
// variable:
// var message2="PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(message2)
// Q6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
// var email;
// email="aahmadkhan156@gmail.com"
// alert("My email address is "+email)
// Q7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
// var book;
// book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the book"+" "+book);
// Q8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JavaScript")
// Q9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);

                            // Chapter 03
// Q1. Declare a variable called age & assign to it your age. Show
//  your age in an alert box
// var age ="15";
// alert("I am " +age+ " yeard old");
// Q2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// Answer
// var n=1;

// alert("you have visited "+ n + " times");
// n=n+1;
// Q3. Declare a variable called birthYear & assign to it your birth year.
// Answer
// var birthYear=200;

// document.write("My birth year is  "+birthYear );
// document.write(" Data type of my declared variable is number");
// Q4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// Answer
// var visitor_name="John Doe";
// var product="t-shirt";
// var Quantity=5;
// document.write(visitor_name +" Ordered "+Quantity+ " "+product +" on  XYZ Clothing store" );

                                // Chapter 4
// Q1. Declare 3 variables in one statement.
// var var1 , var2, var3;
// Q2. Declare 5 legal & 5 illegal variable names.
// Answer
//Legal
// var myName;
// var $name;
// var full_name;
// var nam3;
// var _name;
//Illegal
// var 3name;
// var my name;
// var my-name;
// var ?name;
// var class;
// Q3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// Answer
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br> Variable names can only contain $, _, number and character For example  $my_1stVariable<br>");
// document.write(" Variables must begin with a character, _ or $");
// document.write("<br>Variables Name are Case Sensetive");
// document.write("<br> Variable name should not be JS keywords")
                


                    // Chapter 5 MATH EXPRESSIONS


// Q 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser
// Answer
// var num1=+prompt("Enter 1st Number");
// var num2=+prompt("Enter 2nd Number");
// var result = num1+num2;
// document.write("<br>Sum of "+ num1 +" and " + num2 +" is "+ result);
// Q2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// Answer
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var multiplication=num1*num2;
// var division=num1/num2;
// var mod=num1%num2;

// document.write("<br>Multipication of "+num1+" and "+num2+" is "+ multiplication);
// document.write("<br>Dividision of "+num1+" by "+num2+" is "+division);
// document.write("<br>Remainder is "+mod);

// Q3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// Answer

// var n;
// document.write("Value after variable declaration is:");
// n=5;
// document.write("<br>Initial value: "+n);
// n++;
// document.write("<br>Value after increment is:"+n);
// n+=7;
// document.write("<br>Value after addition of 7 is:"+n);
// n--;
// document.write("<br>Value after decrement is:"+n);
// n=n%3;
// document.write("<br>The variable's remainder after dividing by 3 is"+n);

// Q4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// ticketsto  a movie.


// Answer
// var cost =600;
// var  ticketsto=5;
// document.write("Total cost to buy 5 tickets to a movie is "+cost*ticketsto+" PKR");

// Q5. Write a script to display multiplication table of any
// number in your browser.

// Answer
// var i=0;
// var num=prompt("Enter number to print a table of that number");
// document.write("Table of "+ num +" is")
// for(i=1; i<=10; i++)
// document.write("<br>"+num+" * "+ i +" = "+num*i);


// Q6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”


// Answer

// var C=prompt("Enter tempreture in Celsius");
// var F=(C*9/5)+32;

// document.write("<br>"+C+"C is"+ F+"F");
// var F=prompt("Enter tempreture in fahrenheit");
// C=(F-32)*5/9;

// document.write("<br>"+F+"F is"+ C+"C");

// Q7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Answer

// var item1=650;
// var item2=100;
// var quantityOfitem1=3;
// var quantityOfitem2=7;
// var shippingCharges=100;

// document.write("<h1>Shopping Cart</h1><br><br><br>")
// document.write("<br> Price of item 1 is "+ item1);
// document.write("<br> Ordered quantity of item 1 is "+quantityOfitem1);
// document.write("<br> Price of item 2 is "+item2);
// document.write("<br> Ordered quantity of item 2 is "+quantityOfitem2);
// document.write("<br> Shipping charges are  "+shippingCharges);
// var total=(item1*quantityOfitem1)+(item2*quantityOfitem2)+shippingCharges;
// document.write("<br><br><br>Totol cost of your order is "+total);

// Q8. Store total marks & marks obtained by a student in 2
// variables.

// // Answer
// document.write("<h1>Mark Sheet</h1><br><br><br>")
// var icp=+prompt("Enter ICP Marks");
// var maths=+prompt("Enter your Maths Marks");
// var Os=+prompt("Enter Operating System Marks");
// var cg=+prompt("Enter Computer Graphics Marks");

// total=400;
// var obt=icp+maths+Os+cg;
// document.write("Total Marks Are "+total);
// document.write("<br>Obtained Marks are"+obt);
// var per=(obt/total)*100;
// document.write("<br><br>Percentage is "+ per+"%");


// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

 // Answer

// document.write("<h1>Currency in PKR</h1>")

// var totalCurrency=10*104.80+25*28;
// document.write("<br>Total Currency is "+ totalCurrency);

// Q10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

 // Answer

// var num=7;
// document.write("Number is = "+num+"<br> a.Add 5 <br>b. Multiply by 10 <br>c. Divide the result by 2");
// num=((num+5)*10)/2
// document.write("<br><br>Final Result is "+num);


// Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

 // Answer

//  var currentYear=+prompt("Enter Current Year");
//  var birthYear=+prompt("Enter your birth year");
//  var age=currentYear-birthYear;
// document.write("<h1>Age Calculator</h1><br>")
// document.write("You are either "+age+" years old or "+--age+" years old");


// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and 
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Answer

// document.write("<h1>The Geometrizer</h1>")


// var radius=+prompt("Enter Radius")
// document.write("Radius of a Circle is "+radius);
// var pie=3.142;
// var circumference= 2*pie*radius;
// document.write("<br>The circumference is "+circumference);
// var area=pie*(radius*radius);
// document.write("<br>Area is"+ area);



// Q13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Answer

// document.write("<h1>The GeometrizerThe Lifetime Supply Calculator</h1>")

// var favoriteSnack="chips";
// var age="22";
// var maxAge="24"
// var amountPerday=4;
// var total=27;
// document.write("You will need "+(maxAge-age)*amountPerday+" to last you until the ripe old age of "+maxAge);




                // Chapter 6-9

// Q 1. Write a program to take a number in a variable, do the
// required arithmetic to display  in your browser:


// Answer

// var a=+prompt("Enter a number");
// document.write("Result<br>The value of a is "+a);
// document.write("<br>The value of ++a is "+ ++a);

// document.write("<br><br><br>The value of a++ is "+ a++);
// document.write("<br>Now the value of a is "+ a);

// document.write("<br><br><br>The value of --a is "+ --a);
// document.write("<br>Now the value of a is "+ a);

// document.write("<br><br><br>The value of a-- is "+ a--);
// document.write("<br>Now the value of a is "+ a);


// Q2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; a=1
// --a - --b;  1 - 0
// --a - --b + ++b;   1 - 0 + 1
// --a - --b + ++b + b--;   1 - 0 + 1 
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--; //1 - 0 + 1 + 1
// document.write("a is "+a); //a = 1
// document.write("<br>b is "+b); //b=0
// document.write("<br>result is "+ result); //3


// Q3. Write a program that takes input a name from user &
// greet the user.

// Answer

// var userName=prompt("Enter your Name");
// document.write("Hello "+userName);

// Q5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// Answer

// var num=+prompt("Enter a number");
// var i=1;

// if (num==0 ||num==1 || num==2 || num==3 || num==4 || num==5 || num==6 || num==7 || num==8 || num==9 )
// {
// for(i=1; i<=10; i++ )
// {
//     document.write("<br>"+num + " * "+ i +" = "+num*i);
// }
// }
// else 
// {
//     for(i=1; i<=10; i++ )
// {
//     document.write("<br>"+5 + " * "+ i +" = "+5*i);
// }
// }

// Q6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");
// var sub1=prompt("Enter 1st Subject Name");
// var sub2=prompt("Enter 2nd Subject Name");
// var sub3=prompt("Enter 3rd Subject Name");
// var total=100;
// var ob1=+prompt("Enter 1st Subject's Obtained Marks");
// var ob2=+prompt("Enter 2nd Subject's Obtained Marks");
// var ob3=+prompt("Enter 3rd Subject's Obtained Marks");
// var per1=(ob1/total)*100;
// var per2=(ob2/total)*100;
// var per3=(ob3/total)*100;
// document.write("<br>"+sub1 + " "+ total + " "+ob1+" "+per1 +"%");
// document.write("<br>"+sub2 + " "+ total + " "+ob2+" "+per2 +"%");
// document.write("<br>"+sub3 + " "+ total + " "+ob3+" "+per3 +"%");
// total=total*3;
// var ob=ob1+ob2+ob3;
// var per=(ob/total)*100;
// document.write("<br>" +total + " "+ob+" "+per +"%");


// Q1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// solution
// var cityName=prompt("Enter Your City Name");
// if(cityName=="karachi" || cityName=="KARACHI" || cityName=="Karachi")
// {
//     document.write("Welcome to the city of lights");
// }


// Q2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// Answer
// var gender =prompt("Enter Your Gender");
// if(gender=="Male" || gender=="male" || gender=="MALE")
//  {
//      document.write("Good Morning Sir.");
//  }
//  else if (gender=="female" || gender=="Female" || gender=="FEMALE")
// {
//     document.write("Good Morning Ma’am.");
// }

// Q3. Write a program to take input color of road traffic signal
// from the user & show the message according to:

// Answer

// var signal=prompt("Input color of road traffic signal");
// if(signal=="Red")
// document.write("<br>Must Stop");
// if(signal=="Yellow")
// document.write("<br>Ready to move");
// if(signal=="Green")
// document.write("<br>Move now");
// else
// document.write("<br>Not Availabe");

// Q4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// Answer

var inp=prompt("Input remaining fuel in car (in litres)");
if(inp<0.25)
document.write("Please refill the fuel in your car");
