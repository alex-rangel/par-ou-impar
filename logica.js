let input = document.getElementById("campo")
let enviar = document.getElementById("btn")
let resposta = document.getElementById("res")
let zerar = document.getElementById("btnz")

input.value = " "

function mandar(){
if (input.value == " "){
    resposta.innerHTML = " "
}
else if (input.value%2 == 0){
    resposta.innerHTML = `<p id="pRes">O número ${input.value} é par</p>`
}
else{
    resposta.innerHTML = `<p id="pRes">O número ${input.value} é impar</p>`  
}
input.value = " "
}


zerar.addEventListener("click", function() {
    input.value = " "
    resposta.innerHTML = " "
    input.focus()
})

enviar.addEventListener("click", mandar)

input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        enviar.click()
    }
})

input.addEventListener("keyup", function (event) {
    if (event.keyCode == 8) {
        event.preventDefault()
        zerar.click()
    }
})