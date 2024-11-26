let feed = document.getElementById("feed");

const url = "https://escola-97256-default-rtdb.firebaseio.com/guilda/.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    let htmlContent = "";

    // Converta o objeto em um array de posts, incluindo o postId para manter a referência
    const postsArray = Object.keys(data).map(postId => ({ id: postId, ...data[postId] }));

    // Ordene os posts pela data mais recente (ano, mês, dia, hora e minuto)
    postsArray.sort((a, b) => {
      const dateA = new Date(a.Ano, a.Mes - 1, a.Dia, a.Hora, a.Minuto);
      const dateB = new Date(b.Ano, b.Mes - 1, b.Dia, b.Hora, b.Minuto);
      return dateB - dateA; // Ordem decrescente
    });

    // Gere o HTML na ordem desejada
    postsArray.forEach(post => {
      
      
      htmlContent += `
        <div class="post">
          <img src="${post.IMG}" alt="Imagem do post" height="400px">
          <p>${post.LG}</p>
          <p id='id' style='font-size:10pt;'>id: ${post.id}</p>
       <a onclick='recompensaA()' id='ll' href="${post.Link}" target='_blank' style='display: ${post.visivel};'>Saiba mais</a>
        </div>
      `;
      
    });
    
    

  
    feed.innerHTML = htmlContent;

  })
  .catch(error => {
    console.error("Erro ao buscar dados:", error);
    alert("ocorreu um erro na exibição de dados, verifique sua internet mas se continuar reporte o problema aos desenvolvedores.")
  });
  
  
  function entrarGuilda() {
    
    
    
    
  }


