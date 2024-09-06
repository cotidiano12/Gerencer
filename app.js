function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento no console para verificação
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item de dado (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      // Constrói o HTML para cada resultado, incluindo título, link e descrição
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
        </div>
      `;
    }
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }