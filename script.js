
let vitorias = 50
let derrotas = 1
let saldoVitorias = rankearHeroi(derrotas, vitorias)



function rankearHeroi(vitorias, derrotas) {
    return derrotas - vitorias;
}

switch (true) {
    case (saldoVitorias < 10):
        console.log("Você está no Nível Ferro, com o total de " + saldoVitorias + " vitórias")
        break;


    case (saldoVitorias >= 11 && saldoVitorias <= 20):
        console.log("Você está no nível Bronze, com o total de " + saldoVitorias + " vitórias")
        break;

    case (saldoVitorias >= 21 && saldoVitorias <= 50):
        console.log("Você está no nível Prta, com o total de " + saldoVitorias + " vitórias")
        break;

    case (saldoVitorias >= 51 && saldoVitorias <= 80):
        console.log("Você está no nível Ouro, com o total de " + saldoVitorias + " vitórias")
        break;

    case (saldoVitorias >= 81 && saldoVitorias <= 90):
        console.log("Você está no nível Diamante, com o total de " + saldoVitorias + " vitórias")
        break;

    case (saldoVitorias >= 91 && saldoVitorias <= 100):
        console.log("Você está no nível Lendário, com o total de " + saldoVitorias + " vitórias")
        break;
    case (saldoVitorias >= 101 ):
        console.log("Parabéns! agora você é Imortal, com o total de " + saldoVitorias + " vitórias")
        break;
}