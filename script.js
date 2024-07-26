let inputElement = document.getElementById('input'); 
let button = document.getElementById("button")
let resultElement = document.getElementById("result")
let responseElement = document.getElementById("response")
let i = 0

function check(ans) {
    value1=inputElement.value
    if (value1 == ans){
        responseElement.textContent = "Correct!"
        i = 1
    } else {
        responseElement.textContent = "Wrong!"
    }
}

button.addEventListener("click", function(){
    let round = 1
    if (round == 1){
        while(i == 0){
            check("general")
            round = round + 1
        }
        
    }
})