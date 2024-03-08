type Ctenar = {
    jmeno: string,
    pocetknih: number
}
// Máte seznam jmen a počty knih, 
// které lidé přečetli v posledním měsíci.
// Například: 
let ctenari: Array<Ctenar> = [
    { jmeno: "Petr", pocetknih: 4 },
    { jmeno: "Anna", pocetknih: 7 },
    { jmeno: "Jana", pocetknih: 3 },
    { jmeno: "David", pocetknih: 7 }
]
/*
 Napište algoritmus, který najde osobu 
 s největším počtem přečtených knih 
 a vrátí její jméno a počet knih.
 Pokud je více osob se stejným největším 
 počtem přečtených knih, zvolte libovolnou 
 z nich.
*/
let knihomol: Ctenar; //Například: { jmeno: "Anna", pocetknih: 7 }


console.log(knihomol)