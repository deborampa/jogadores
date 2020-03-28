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
                <img src="${jogador.Club Logo}"/>
                <p class="nome-clube">${jogador.Club}</p>
            </div>
            `
    });
    document.querySelector(".cards-div").innerHTML = string;
});


// field1: "0",
// ID: "158023",
// Name: "L. Messi",
// Age: "31",
// Photo: "https://cdn.sofifa.org/players/4/19/158023.png",
// Nationality: "Argentina",
// Flag: "https://cdn.sofifa.org/flags/52.png",
// Overall: "94",
// Potential: "94",
// Club: "FC Barcelona",
// Club Logo: "https://cdn.sofifa.org/teams/2/light/241.png",
// Value: "€110.5M",
// Wage: "€565K",
// Special: "2202",
// Preferred Foot: "Left",
// International Reputation: "5",
// Weak Foot: "4",
// Skill Moves: "4",
// Work Rate: "Medium/ Medium",
// Body Type: "Messi",
// Real Face: "Yes",
// Position: "RF",
// Jersey Number: "10",
// Joined: "Jul 1, 2004",
// Loaned From: "",
// Contract Valid Until: "2021",
// Height: "5'7",
// Weight: "159lbs",