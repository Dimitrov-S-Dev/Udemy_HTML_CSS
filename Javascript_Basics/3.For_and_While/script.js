/*
    For loops are perfect for running a section of code a set number of times.
    We must give a starting iterable value, ending iterable value, and step.
*/
for (let i = 0; i < 10; i++){
    console.log("Hello World!")
    console.log("Current for loop iterable index is " + i);

}

for (let j = 10; j > 0; j--){
    console.log("The  decrement is " + j);
}

let even = prompt("How many even numbers would u like to display: ")
for (let i = 2; i <= even * 2; i += 2){
    console.log("Even Number: " + i)
}

let odd = prompt("How many odd numbers would u like: ")
for(j = 1; j <= odd*2; j += 2){
    console.log("Odd number: " + j)
}
/* 
    For-of loops through the values of an iterable object such as an array.
    Here, each iteration of the loop we will get a different value from our iterable array.
*/
let names = ["Joe", "Bob", "Ani", "Mani"];
for (let name of names){
    console.log("Here is the names: " + name);
}

// While loops are perfect for running a section of code as long as a statement is True.

let i = 0;
while (i < 5){
    console.log("The current number is: " + i);
    i ++;
}

let state = "yes";
while (state == "yes"){
    state = prompt("Do you want to keep looping (yes/no): ")
    console.log("Lets do this!");
}
console.log("Thank u for looping!");