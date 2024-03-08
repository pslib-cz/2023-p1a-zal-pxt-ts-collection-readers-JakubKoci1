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
let pocetKnih:number = 0
let pocetKnihhighest: number = 0
let radek:number = 0
let name:string
for (let i = 0; i < 4; i++) {
    pocetKnih = ctenari[radek].pocetknih
    if(pocetKnih > pocetKnihhighest) {
        name = ctenari[radek].jmeno
        pocetKnihhighest = pocetKnih
    }
    radek += 1
}
let knihomol: Ctenar

knihomol = {jmeno:name,pocetknih:pocetKnihhighest}

console.log(knihomol)
