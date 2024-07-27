let inputElement = document.getElementById('input'); 
let button = document.getElementById("button")
let resultElement = document.getElementById("result")
let responseElement = document.getElementById("response")
let round = 1

function check(ans) {
    let value1=inputElement.value
    ans = String(ans)
    value1 = String(value1)
    if (value1 == ans){
        responseElement.textContent = "Correct!"
        return true;
    } else {
        responseElement.textContent = "Wrong!"
        return false;
    }
}

function button_click(){
    button.addEventListener("click", function(){
      if (round == 1){
        if (check("general") == true){
            round = round + 1
        }
      } else if (round == 2) {
        if (check("derive") == true){
            round = round + 1
        }
      } else if (round == 3) {
        if (check("release") == true){
            round = round + 1
        }
      } else if (round == 4) {
        if (check("feature") == true){
            round = round + 1
        }
      } else if (round == 5) {
        if (check("gossip") == true){
            round = round + 1
        }
      } else if (round == 6) {
        if (check("reveal") == true){
            round = round + 1
        }
      } else if (round == 7) {
        if (check("chase") == true){
            round = round + 1
        }
      } else if (round == 8) {
        if (check("brand") == true){
            round = round + 1
        }
      } else if (round == 9) {
        if (check("edit") == true){
            round = round + 1
        }
      } else if (round == 10) {
        if (check("image") == true){
            round = round + 1
        }
      }
      responseElememt.textContent = " ";
    })
} 

button_click()




