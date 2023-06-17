const name_input = document.querySelector("#name_input")
const name_btn = document.querySelector("#name_btn")
const name_message = document.querySelector("#name_message")


//Getting values from a simple input field.

name_btn.addEventListener("click", function (e){
    let name = name_input.value;
    name_message.innerHTML = "Thank you " + name + " ! I appreciate you entering your name!"

})

//Getting a value from an isolated select element.

const teams = document.querySelector("#teams")
const team_btn = document.querySelector("#team_btn")
const team_message = document.querySelector("#team_message")
function getTeam(e){
    team_message.innerHTML = "I hope " + teams.value + " wins the game!"

}

team_btn.addEventListener("click", getTeam)
//Getting a value from linked radio buttons within a form.

const food_form = document.querySelector("#food_form")
const food_btn = document.querySelector("#food_btn")
const food_message = document.querySelector("#food_message")

function getFood(e){
    let fav_food = food_form.fav_food;
    food_message.innerHTML = "I'd really love a " + fav_food.value + " too!"
}

food_btn.addEventListener("click", getFood)