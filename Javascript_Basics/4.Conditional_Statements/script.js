//if-else statements are great for variable conditions that contain Boolean data. 

let number = prompt("Enter a number: ");
if (number == 5){
    alert("Your number is 5!");
}
else{
    alert("Your number is not 5!");
}
//If elif else

let age = prompt("Enter your age: ");
if (age < 13){
    alert("You are child");
}
else if (age < 20){
    alert("You are teenager");
}
else if (age < 55){
    alert("You are adult");
}
else{
   alert("You are older!");
}
/*
    The conditional (ternary) operator is the only JavaScript operator that takes three operands
    a condition followed by a question mark (?), then an expression to execute if the condition is true 
    followed by a colon (:), and finally the expression to execute if the condition is false.
*/
let wage = prompt("How much do u make an hour");
let wage_message = wage >= 15.00 ? "That is decent money!" : "You need to be paid more! ";
alert(wage_message);

//We can use control statements to change how a loop is processed based on a conditional value.

for (let i = 0; i < 10; i++){
    console.log(i);

    if (i == 3){
        continue;
    }
    else if (i == 6){
        break;
    }
    else {
        console.log("Learning about control statements!");
    }

    console.log("Continue just goes to the next iteration of the loop");
    console.log("Break - stops the loop");
}

// Switch cases are ideal for fixed data values.

let dog = prompt("Enter a type of dog:")
switch (dog){
    case ("beagle"):
        alert("B");
        break;
    case ("boxer"):
        alert("Bxr");
        break;

}