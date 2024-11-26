let pontos = Number (localStorage.getItem("pontos"))
let clicouSaiba = localStorage.getItem("clicouSaiba")
function recompensaA() {

if(!clicouSaiba) {
 pontos = pontos +3
localStorage.setItem("pontos",pontos)

clicouSaiba = 1
localStorage.setItem("clicouSaiba",clicouSaiba)

}

}