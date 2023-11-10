let allButtons = document.querySelectorAll(".btn.btn-dark")
let inputDecimal = document.querySelector("#decimal")

let buttonInt
let pesos = [128, 64, 32, 16, 8, 4, 2, 1]

//console.log(allButtons)
//console.log(allButtons[0].id)

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", (e) => {
        if (allButtons[i].textContent == "0") {
            allButtons[i].textContent = "1"
        }else {
            allButtons[i].textContent = "0"
        }

        if (e.target.textContent == "1") {
            //buttonInt = parseInt(allButtons[i].textContent)
            console.log(e.target)
            
            
        }

    })
}
