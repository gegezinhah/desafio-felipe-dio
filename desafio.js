// Declaração das variáveis nome e experiência do herói
let nomeHeroi = "Poderosa Dev";
let xpHeroi = 7800;

// Define o nível do herói  com base na quantidade de XP
let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Mensagem de saída de acordo com a XP
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);



