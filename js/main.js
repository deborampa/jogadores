fetch("https://fifagama.herokuapp.com/fifa19/0/10")
    .then(response => response.json())
    .then((data) => {
    let string = ""
    data.forEach((jogador) => {
        string += ` 
            <div class="card">
                <p class="subtitulo">Nome:</p>
                <p class="textos">${jogador.Name}</p>
                <p class="subtitulo">Idade:</p>
                <p class="textos">${jogador.Age}</p>
                <p class="subtitulo">Nacionalidade:</p>
                <p class="textos">${jogador.Nationality}</p>
                <p class="subtitulo">Valor:</p>
                <p class="textos">${jogador.Value}</p>

                <img src="${jogador.Photo}"/>
                <img src="${jogador["Club Logo"]}"/>
                <p class="nome-clube">${jogador.Club}</p>
            </div>
            `
    });
    document.querySelector(".cards-div").innerHTML = string;
});
