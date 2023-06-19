const feet_input = document.querySelector("#feet")
const inches_input = document.querySelector("#inches")
const pounds_input = document.querySelector("#pounds")
const tool_btn = document.querySelector("#tool_btn")
const tool_headings = document.querySelectorAll("#tool_values h3")


tool_btn.addEventListener("click", function (e){
    let size;

    if (feet_input < 1.5){
        size = "Small"
    }
    else if (feet_input < 1.6){
        if (pounds_input < 65){
            size = "Small"
        }
        else {
            size = "Medium"
        }

    }
    else if (feet_input < 1.8){
        size = "Large"
    }
    else {
        size = "XLarge"
    }
    tool_headings[0].innerHTML = "You are " + feet_input.value + "m " + inches_input.value + "sm" + " and " + pounds_input.value + "kg"
    tool_headings[1].innerHTML = "We recommend size "  + size + " ."
})