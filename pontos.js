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
  
  
}


function shar() {
  
  if(navigator.share) {
  
  navigator.share({
    
    title: "Guilda JK",
    text: "https://guildajk.vercel.app"
    
    
    
  })
  .then(data => {
    
    if(localStorage.getItem("compartilhou") == 0) {
      
      compartilhou = 1
      localStorage.setItem("compartilhou",compartilhou)
      
      pontos = pontos +3
      
      localStorage.setItem("pontos",pontos)
      
      atualizarPontos()
      
      
      alert("Obrigado por compartilhar! vc ganhou 2 pontos!")
      
      
    } else {
      
      
      alert("Obrigado por compartilhar!")
      
    }
    
    
  })
  } else {
    
    alert("Seu navegador não é compatível")
    
    
  }
  
}