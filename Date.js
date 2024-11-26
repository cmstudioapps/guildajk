let data = new Date 
let dia = data.getDate()
let diaAnterior = localStorage.getItem ("diaAnterior")
let compartilhou = Number(localStorage.getItem("compartilhou"))

if (dia != diaAnterior) {

  pontos = pontos +2
  localStorage.setItem("pontos",pontos)
  atualizarPontos()

  diaAnterior = dia
  localStorage.setItem("diaAnterior",diaAnterior)

if(localStorage.getItem("compartilhou") == 1 || !localStorage.getItem("compartilhou") ) {
compartilhou = 0
localStorage.setItem("compartilhou",compartilhou)
}
  localStorage.removeItem("clicouSaiba")

}