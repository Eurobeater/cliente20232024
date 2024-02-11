let txtAdd = document.querySelector("#txtAdd")
let myList = document.querySelector("#mylist")
let btnAdd = document.querySelector("#btnAdd")
let btnSelAll = document.querySelector("#btnSelAll")
let btnSelNot = document.querySelector("#btnSelNot")
let btnDelSel = document.querySelector("#btnDelSel")

let liSelect = document.getElementsByName("li")

txtAdd.focus()

txtAdd.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        let li = document.createElement("li")
        li.textContent = txtAdd.value
        myList.append(li)
        txtAdd.value = ""
    }
})

btnAdd.addEventListener("click", () => {
    let li = document.createElement("li")
        li.textContent = txtAdd.value
        myList.append(li)
        txtAdd.value = ""
        document.querySelector("#txtAdd").focus()
})

btnSelAll.addEventListener("click", () => {
    let myListSons = document.querySelector("#mylist").children

    for (let i = 0; i < myListSons.length; i++) {
        myListSons[i].style.margin = "5px"
        myListSons[i].style.backgroundColor = "yellow"
    }
    document.querySelector("#txtAdd").focus()
})

btnSelNot.addEventListener("click", () => {
    let myListSons = document.querySelector("#mylist").children

    for (let i = 0; i < myListSons.length; i++) {
        myListSons[i].style.margin = "0px"
        myListSons[i].style.backgroundColor = ""
    }
    document.querySelector("#txtAdd").focus()
})

btnDelSel.addEventListener("click", () => {



    document.querySelector("#txtAdd").focus()
})