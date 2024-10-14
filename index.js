const numWin = 84;
const numDefeat = 36;
const netWin = numWin - numDefeat;
let level;

if (netWin < 10) {
    level = "Ferro";
} else if (netWin > 10 && netWin < 21) {
    level = "Bronze";
} else if (netWin > 20 && netWin < 51) {
    level ="Prata";
} else if (netWin > 50 && netWin < 81) {
    level ="Ouro";
} else if (netWin > 80 && netWin < 91) {
    level ="Diamante";
} else if (netWin > 90 && netWin < 101) {
    level ="Lendário";
} else if (netWin > 100) {
    level ="Imortal";
}

console.log("O Herói tem saldo de " + netWin + " está no nível de " + level);