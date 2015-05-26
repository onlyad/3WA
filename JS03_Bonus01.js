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
var iMostFrequentCountry = 0;
var iPosition;
var iPositionBestPlayer;
var iPositionShortestFirstName = 0;
var iSumOfAge = 0;
var fAverageOfAge = 0;
var sMostFrequentCountryName;
var sNameOfBestPlayer;


var iAgeFirstPlayer = dToday.getYear() - aoSPORTSWOMEN[0].dateOfBirth.getYear();

document.write("<br> First Player: " + aoSPORTSWOMEN[0].firstName + " " + aoSPORTSWOMEN[0].lastName + ", Age: " + iAgeFirstPlayer);

for (iPosition = 0; iPosition < aoSPORTSWOMEN.length; iPosition++) {
    if (aoSPORTSWOMEN[iPosition].rank == "1"){
        iPositionBestPlayer = iPosition;
        sNameOfBestPlayer = aoSPORTSWOMEN[iPosition].firstName + " " + aoSPORTSWOMEN[iPosition].lastName + ", Age: " +
        aoSPORTSWOMEN[iPosition].dateOfBirth;
        iAgeBestPlayer = dToday.getYear() - aoSPORTSWOMEN[iPosition].dateOfBirth.getYear();
    }
}
document.write("<br> Best Player: " + aoSPORTSWOMEN[iPositionBestPlayer].firstName + " " +
aoSPORTSWOMEN[iPositionBestPlayer].lastName + ", Age: " + iAgeBestPlayer);

for (iPosition = 1; iPosition < aoSPORTSWOMEN.length; iPosition++) {
    if (aoSPORTSWOMEN[iPositionShortestFirstName].firstName.length > aoSPORTSWOMEN[iPosition].firstName.length){
        iPositionShortestFirstName = iPosition;
    }
}
document.write("<br>" + aoSPORTSWOMEN[iPositionShortestFirstName].firstName + " " +
     aoSPORTSWOMEN[iPositionShortestFirstName].lastName + ", Shortest FirstName " +
     aoSPORTSWOMEN[iPositionShortestFirstName].firstName);

for (iPosition = 0; iPosition < aoSPORTSWOMEN.length; iPosition++) {
    var iAge =   dToday.getFullYear() - aoSPORTSWOMEN[iPosition].dateOfBirth.getFullYear();
    document.write("<br>" + aoSPORTSWOMEN[iPosition].firstName + " " + aoSPORTSWOMEN[iPosition].lastName +
        ", Age: " + iAge);
    iSumOfAge += iAge;
}
    fAverageOfAge = iSumOfAge / aoSPORTSWOMEN.length;

document.write("<br>Average Age of all player: " + fAverageOfAge);

for (iPosition = 0; iPosition < aoSPORTSWOMEN.length; iPosition++) {
    //document.write("<br> iPosition: " + iPosition);
    for (iPosition2 = iPosition + 1 ; iPosition2 < aoSPORTSWOMEN.length; iPosition2++){
        //document.write("<br> Counter Country b4 compare: " + iCountCountry + "iPosition.BirthPlace:" + iPosition +
        //aoSPORTSWOMEN[iPosition] + "iPosition2.BirthPlace:" + iPosition2 +
        //aoSPORTSWOMEN[iPosition2]);
        if (aoSPORTSWOMEN[iPosition].birthPlace == aoSPORTSWOMEN[iPosition2].birthPlace){
            iCountCountry++;
            //document.write("<br> Counter Country: " + iCountCountry);
        }
    }
    if (iCountCountry > iMostFrequentCountry) {
        iMostFrequentCountry = iCountCountry;
        sMostFrequentCountryName = aoSPORTSWOMEN[iPosition].birthPlace;
    }
}
document.write("<br> Most Frequent Country: " + sMostFrequentCountryName);