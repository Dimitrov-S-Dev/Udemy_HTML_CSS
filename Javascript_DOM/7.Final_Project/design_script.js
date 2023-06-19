const size_form = document.querySelector("#size_form")
const style = document.querySelector("#style")
const color = document.querySelector("#color")
const shirt_img = document.querySelector("#shirt_img")


size_form.addEventListener("change", function (e){
    if (this.size.value == "small"){
        shirt_img.setAttribute("class", "small_img")

    }
    else if (this.size.value == "medium"){
        shirt_img.setAttribute("class", "medium_img")
    }
    else if(this.size.value == "large"){
        shirt_img.setAttribute("class", "large_img")
    }
    else {
        shirt_img.setAttribute("class", "xlarge_img")
    }
})