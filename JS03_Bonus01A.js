/**
 * Created by Dung on 2015-05-25.
 */

//Exercice bonus - tableaux
//On souhaite modéliser des sportifs (sport est au choix).
//
//Chaque sportif possède les caractéristiques suivantes :
//
//    nom
//prénom
//date de naissance (et non l'âge)
//nationalité
//Vous devez créer une équipe complète composée d'au moins 10 joueur.
//
//
//Réfléchissez à la meilleur façon de modéliser cela.
//
//
//
//    A partir de vos variables, vous devrez afficher :
//
//    L'âge du premier sportif
//Le nom complet du joueur ayant le prénom le plus court dans l'équipe
//La moyenne d'âge de l'équipe
//La nationalité qui revient le plus souvent

const aoSPORTSWOMEN = [

    {firstName: "Serena", lastName: "William", dateOfBirth: new Date("1981-09-26"), birthPlace: "USA", rank: 1 },
    {firstName: "Maria", lastName: "Sharapova", dateOfBirth: new Date("1987-04-19"), birthPlace:"Russia", rank: 2 } ,
    {firstName: "Simona", lastName: "Halep", dateOfBirth: new Date("1991-09-27"), birthPlace: "Romania", rank: 3 },
    {firstName: "Petra", lastName: "Kvitova", dateOfBirth: new Date("1990-03-08"), birthPlace: "Czech Republic", rank: 4 },
    {firstName: "Caroline", lastName: "Wozniacki", dateOfBirth: new Date("1990-07-11"), birthPlace: "Denmark", rank: 5 },
    {firstName: "Eugenie", lastName: "Bouchard", dateOfBirth: new Date("1994-02-25"), birthPlace: "Canada", rank: 6 },
    {firstName: "Ana", lastName: "Ivanovic", dateOfBirth: new Date("1987-11-06"), birthPlace: "Canada", rank: 7 },
    {firstName: "Navarro", lastName: "Carla Suarez", dateOfBirth: new Date("1988-09-03"), birthPlace:"Spain", rank: 8 },
    {firstName: "Ekaterina", lastName: "Makarova", dateOfBirth: new Date("1988-06-07"), birthPlace: "Russia", rank: 9 },
    {firstName: "Petkovic", lastName: "Andrea", dateOfBirth: new Date("1987-09-09"), birthPlace: "Germany", rank: 10 }
];

var iCurrentPlayerPosition ;
var iBestPlayerPosition = 0;


// Display Age & Name of best player.
for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++ ) {
    if (aoSPORTSWOMEN[iCurrentPlayerPosition].rank == 1) {
        iBestPlayerPosition = iCurrentPlayerPosition;
    }
}
var dTodayDate = new Date();
document.write("<br> Best player: " + aoSPORTSWOMEN[iBestPlayerPosition].firstName + " " +
    aoSPORTSWOMEN[iBestPlayerPosition].lastName + " Age: " +
    (dTodayDate.getUTCFullYear() - aoSPORTSWOMEN[iBestPlayerPosition].dateOfBirth.getUTCFullYear())   );

// Display Age & Name of the 1st Player.
document.write("<br> First player: " + aoSPORTSWOMEN[0].firstName + " " +
aoSPORTSWOMEN[0].lastName + " Age: " + (dTodayDate.getUTCFullYear() - aoSPORTSWOMEN[0].dateOfBirth.getUTCFullYear()) );

//Le nom complet du joueur ayant le prénom le plus court dans l'équipe
var iShortestFirstNamePosition = 0;
for (iCurrentPlayerPosition = 1; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++){
    if (aoSPORTSWOMEN[iCurrentPlayerPosition].firstName.length < aoSPORTSWOMEN[iShortestFirstNamePosition].firstName.length  ){
        iShortestFirstNamePosition = iCurrentPlayerPosition;
    }
}
document.write("<br> Shortest Name : " + aoSPORTSWOMEN[iShortestFirstNamePosition].firstName);

//La moyenne d'âge de l'équipe
var iAgeSumOfAllPlayers = 0;
var iAgeOfEachPlayer = 0;
for (iCurrentPlayerPosition = 1; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++){
    iAgeOfEachPlayer = (dTodayDate.getUTCFullYear() - aoSPORTSWOMEN[iCurrentPlayerPosition].dateOfBirth.getUTCFullYear());
    document.write("<br>" + aoSPORTSWOMEN[iCurrentPlayerPosition].firstName + " " +
                   aoSPORTSWOMEN[iCurrentPlayerPosition].lastName + ", Age: "+ iAgeOfEachPlayer );
    iAgeSumOfAllPlayers += iAgeOfEachPlayer;
}
var fAverageAgeOfAllPlayers = iAgeSumOfAllPlayers / aoSPORTSWOMEN.length;
document.write("<br>Average Age Of All Players: " + fAverageAgeOfAllPlayers);


//La nationalité qui revient le plus souvent
var iMostFrequentCountryPosition = [];
var iCountCountry ;
var iMostFrequentCountCountry = 0;

for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++){
    iCountCountry = 0;
    for (iNextPlayerPosition = iCurrentPlayerPosition + 1; iNextPlayerPosition < aoSPORTSWOMEN.length; iNextPlayerPosition++){
        if (aoSPORTSWOMEN[iCurrentPlayerPosition].birthPlace == aoSPORTSWOMEN[iNextPlayerPosition].birthPlace){
            iCountCountry++;
        }
    }
    if (iCountCountry > iMostFrequentCountCountry ){
        iMostFrequentCountryPosition  = iCurrentPlayerPosition;
    }
}
document.write("<br> Most Frequent Country :" + aoSPORTSWOMEN[iMostFrequentCountryPosition].birthPlace);


//Les nationalités qui revient le plus souvent
var asMostFrequentCountryPositions = [];
var iMostFrequentCountryIndex = 0;



for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++){
    iCountCountry = 0;
    for (iNextPlayerPosition = iCurrentPlayerPosition + 1; iNextPlayerPosition < aoSPORTSWOMEN.length; iNextPlayerPosition++){
        if (aoSPORTSWOMEN[iCurrentPlayerPosition].birthPlace == aoSPORTSWOMEN[iNextPlayerPosition].birthPlace){
            iCountCountry++;
        }
    }
    if (iCountCountry > 0 ){
        asMostFrequentCountryPositions [iMostFrequentCountryIndex] = iCurrentPlayerPosition;
        iMostFrequentCountryIndex++;
    }
}
document.write("<br> all frequent countries:");
for (iCountCountry = 0; iCountCountry < asMostFrequentCountryPositions.length; iCountCountry++) {
    document.write("<br> Most Frequent Countries :" + aoSPORTSWOMEN[asMostFrequentCountryPositions[iCountCountry]].birthPlace);
}