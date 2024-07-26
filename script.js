let inputElement = document.getElementById('input'); 
let button = document.getElementById("button")
let resultElement = document.getElementById("result")
let responseElement = document.getElementById("response")
let i = 0
let round = 1

function check(ans) {
    value1=inputElement.value
    if (value1 == ans){
        responseElement.textContent = "Correct!"
        i = 1
    } else {
        responseElement.textContent = "Wrong!"
    }
}

function button_click(){
    button.addEventListener("click", function(){
      if (round == 1){
        while(i == 0){
            check("general")
        }
        round = round + 1
        i = 0
      } else if (round == 2) {
          while(i == 0){
            check("derive")
          }
          round = round + 1
          i = 0
      } else if (round == 3) {
          while(i == 0){
            check("release")
          }
          round = round + 1
          i = 0
      } else if (round == 4) {
            while(i == 0){
             check("feature")
            }
            round = round + 1
            i = 0
      } else if (round == 5) {
            while(i == 0){
                check("gossip")
            }
            round = round + 1
            i = 0
      } else if (round == 6) {
            while(i == 0){
                check("reveal")
            }
            round = round + 1
            i = 0
      } else if (round == 7) {
            while(i == 0){
                check("chase")
            }
            round = round + 1
            i = 0
      } else if (round == 8) {
            while(i == 0){
                check("brand")
            }
            round = round + 1
            i = 0
      } else if (round == 9) {
            while(i == 0){
                check("edit")
            }
            round = round + 1
            i = 0
      } else if (round == 10) {
            while(i == 0){
                check("image")
            }
            round = round + 1
            i = 0
      }
    })
} 

for (a=1; a <= 10; a++) {
    button_click()
}