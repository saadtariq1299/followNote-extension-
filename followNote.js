document.addEventListener("DOMContentLoaded", function(){
const note = document.querySelector("#noteData")
const matière = document.querySelector("#matiereData")
const display = document.querySelector("#display")
const entrez = document.querySelector("#entrez")
const supprimer = document.querySelector("#supprimer")
const localData = JSON.parse(localStorage.getItem("data"))
const localDataS = JSON.parse(localStorage.getItem("data2"))
let data = []
let dataM = []
let message = ""


if(localDataS && localData){
   data = localData
   dataM = localDataS
   render(dataM, data)
}



entrez.addEventListener("click", function(){
    if(document.querySelector("#matiereData").value && document.querySelector("#noteData").value != ""){
        dataM.push(document.querySelector("#matiereData").value)
        data.push(document.querySelector("#noteData").value)
        render(dataM, data)
        matière.value = ""
        note.value = ""
        localStorage.setItem("data2", JSON.stringify(dataM))
        localStorage.setItem("data", JSON.stringify(data))
        
    }else{
        alert("yoo wtf!!")
    }

})

function render(donnes, donnes2){
    let mess = ""
    if(data && dataM != null){
        for(let i = 0; i < donnes.length; i++){
            mess += `<li> ${donnes[i]}: ${donnes2[i]} </li>`
            display.innerHTML = mess
        }
    }
}



supprimer.addEventListener("click", function(){
    localStorage.clear()
    data = []
    dataM = []
    display.innerHTML = ""
})









})