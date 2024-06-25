// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

let heroi = [
    {nome: "Maria", xp: 10002}
]

for (let repeticao = 0; repeticao < heroi.length; repeticao++){
    let nomeHeroi = heroi[repeticao].nome
    let xpHeroi = heroi[repeticao].xp
    let nivel = ""

    if (xpHeroi < 1000) {
        nivel = "Ferro"
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000){
        nivel = "Bronze"
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000){
        nivel = "Prata"
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000){
        nivel = "Ouro"
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000){
        nivel = "Platina"
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000){
        nivel = "Ascendente"
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000){
        nivel = "Imortal"
    } else {
        nivel = "Radiante"
    }


console.log("O Herói de nome " + nomeHeroi ,"está no nível " + nivel)
}