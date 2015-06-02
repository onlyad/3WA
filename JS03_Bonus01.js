/**
 * Created by Dung on 2015-05-23.
 */

const ooSPORTSWOMEN = {
    eugenie: {firstName: "Eugenie", lastName: "Bouchard", dateOfBirth: new Date("1994-02-25"), birthPlace: "Canada" },
    serena: {firstName: "Serena", lastName: "William", dateOfBirth: new Date("1981-09-26"), birthPlace: "USA" },
    maria: {firstName: "Maria", lastName: "Sharapova", dateOfBirth: new Date("1987-04-19"), birthPlace:"Russia" },
    simona: {firstName: "Simona", lastName: "Halep", dateOfBirth: new Date("1991-09-27"), birthPlace: "Romania" },
    petra: {firstName: "Petra", lastName: "Kvitova", dateOfBirth: new Date("1990-03-08"), birthPlace: "Czech Republic" },
    caroline: {firstName: "Caroline", lastName: "Wozniacki", dateOfBirth: new Date("1990-07-11"), birthPlace: "Denmark" },
    ana: {firstName: "Ana", lastName: "Ivanovic", dateOfBirth: new Date("1987-11-06"), birthPlace: "Serbia" },
    navarrro: {firstName: "Navarro", lastName: "Carla Suarez", dateOfBirth: new Date("1988-09-03"), birthPlace:"Spain" },
    ekaterina: {firstName: "Ekaterina", lastName: "Makarova", dateOfBirth: new Date("1988-06-07"), birthPlace: "Russia" },
    petkovic: {firstName: "petkovic", lastName: "Andrea", dateOfBirth: new Date("1987-09-09"), birthPlace: "Germany" }
};

const aoSPORTSWOMEN = [

     {firstName: "Serena", lastName: "William", dateOfBirth: new Date("1981-09-26"), birthPlace: "USA", rank: "1" },
     {firstName: "Maria", lastName: "Sharapova", dateOfBirth: new Date("1987-04-19"), birthPlace:"Russia", rank: "2" } ,
     {firstName: "Simona", lastName: "Halep", dateOfBirth: new Date("1991-09-27"), birthPlace: "Romania", rank: "3" },
     {firstName: "Petra", lastName: "Kvitova", dateOfBirth: new Date("1990-03-08"), birthPlace: "Czech Republic", rank: "4" },
     {firstName: "Caroline", lastName: "Wozniacki", dateOfBirth: new Date("1990-07-11"), birthPlace: "Denmark", rank: "5" },
     {firstName: "Eugenie", lastName: "Bouchard", dateOfBirth: new Date("1994-02-25"), birthPlace: "Canada", rank: "6" },
     {firstName: "Ana", lastName: "Ivanovic", dateOfBirth: new Date("1987-11-06"), birthPlace: "Serbia", rank: "7" },
     {firstName: "Navarro", lastName: "Carla Suarez", dateOfBirth: new Date("1988-09-03"), birthPlace:"Spain", rank: "8" },
     {firstName: "Ekaterina", lastName: "Makarova", dateOfBirth: new Date("1988-06-07"), birthPlace: "Russia", rank: "9" },
     {firstName: "Petkovic", lastName: "Andrea", dateOfBirth: new Date("1987-09-09"), birthPlace: "Germany", rank: "10" }
];

var dToday = new Date();
var iAgeBestPlayer;
var iCountCountry = 0;

var iCurrentPlayerPosition;
var iPositionBestPlayer;

var iSumOfAge = 0;
var fAverageOfAge;
var sMostFrequentCountryName;
var sNameOfBestPlayer;


var iAgeFirstPlayer = dToday.getYear() - aoSPORTSWOMEN[0].dateOfBirth.getYear();

// Age & name of the 1st player on the list
document.write("<br> First Player: " + aoSPORTSWOMEN[0].firstName + " " + aoSPORTSWOMEN[0].lastName + ", Age: " + iAgeFirstPlayer);

// Age & Name of the best player on the list
for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++) {
    if (aoSPORTSWOMEN[iCurrentPlayerPosition].rank == "1"){
        iPositionBestPlayer = iCurrentPlayerPosition;
        sNameOfBestPlayer = aoSPORTSWOMEN[iCurrentPlayerPosition].firstName + " " + aoSPORTSWOMEN[iCurrentPlayerPosition].lastName + ", Age: " +
        aoSPORTSWOMEN[iCurrentPlayerPosition].dateOfBirth;
        iAgeBestPlayer = dToday.getYear() - aoSPORTSWOMEN[iCurrentPlayerPosition].dateOfBirth.getYear();
    }
}
document.write("<br> Best Player: " + aoSPORTSWOMEN[iPositionBestPlayer].firstName + " " +
aoSPORTSWOMEN[iPositionBestPlayer].lastName + ", Age: " + iAgeBestPlayer);

// We compare the 1st Firstname w index 0 to the 2nd Firstname w index 1. And we take the shortest Firsname
// then we compare this shortest Firstame to the next Firstname. Til the end of loop for .
var iPositionShortestFirstName = 0;
for (iCurrentPlayerPosition = 1; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++) {
    if (aoSPORTSWOMEN[iPositionShortestFirstName].firstName.length > aoSPORTSWOMEN[iCurrentPlayerPosition].firstName.length){
        iPositionShortestFirstName = iCurrentPlayerPosition;
    }
}
document.write("<br>" + aoSPORTSWOMEN[iPositionShortestFirstName].firstName + " " +
     aoSPORTSWOMEN[iPositionShortestFirstName].lastName + ", Shortest FirstName " +
     aoSPORTSWOMEN[iPositionShortestFirstName].firstName);

// We calculate & then display the Age average of all the player.
for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++) {
    var iAge =   dToday.getFullYear() - aoSPORTSWOMEN[iCurrentPlayerPosition].dateOfBirth.getFullYear();
    document.write("<br>" + aoSPORTSWOMEN[iCurrentPlayerPosition].firstName + " " + aoSPORTSWOMEN[iCurrentPlayerPosition].lastName +
        ", Age: " + iAge);
    iSumOfAge += iAge;
}
    fAverageOfAge = iSumOfAge / aoSPORTSWOMEN.length;

document.write("<br>Average Age of all player: " + fAverageOfAge);

var iMostFrequentCountry = 0;
for (iCurrentPlayerPosition = 0; iCurrentPlayerPosition < aoSPORTSWOMEN.length; iCurrentPlayerPosition++) {
    //document.write("<br> iCurrentPlayerPosition: " + iCurrentPlayerPosition);
    // We select the 1st country of the 1st player compare with 2nd player's country, then 3rd, then 4th
    for (iNextPlayerPosition = iCurrentPlayerPosition + 1 ; iNextPlayerPosition < aoSPORTSWOMEN.length; iNextPlayerPosition++){
        //document.write("<br> Counter Country b4 compare: " + iCountCountry + "iCurrentPlayerPosition.BirthPlace:" + iCurrentPlayerPosition +
        //aoSPORTSWOMEN[iCurrentPlayerPosition] + "iNextPlayerPosition.BirthPlace:" + iNextPlayerPosition +
        //aoSPORTSWOMEN[iNextPlayerPosition]);
        if (aoSPORTSWOMEN[iCurrentPlayerPosition].birthPlace == aoSPORTSWOMEN[iNextPlayerPosition].birthPlace){
            iCountCountry++;
            //document.write("<br> Counter Country: " + iCountCountry);
        }
    }
    if (iCountCountry > iMostFrequentCountry) {
        iMostFrequentCountry = iCountCountry;
        sMostFrequentCountryName = aoSPORTSWOMEN[iCurrentPlayerPosition].birthPlace;
    }
}
document.write("<br> Most Frequent Country: " + sMostFrequentCountryName);