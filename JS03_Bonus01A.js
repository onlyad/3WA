/**
 * Created by Dung on 2015-05-25.
 */


const aoSPORTSWOMEN = [

    {firstName: "Serena", lastName: "William", dateOfBirth: new Date("1981-09-26"), birthPlace: "USA", rank: 1 },
    {firstName: "Maria", lastName: "Sharapova", dateOfBirth: new Date("1987-04-19"), birthPlace:"Russia", rank: 2 } ,
    {firstName: "Simona", lastName: "Halep", dateOfBirth: new Date("1991-09-27"), birthPlace: "Romania", rank: 3 },
    {firstName: "Petra", lastName: "Kvitova", dateOfBirth: new Date("1990-03-08"), birthPlace: "Czech Republic", rank: 4 },
    {firstName: "Caroline", lastName: "Wozniacki", dateOfBirth: new Date("1990-07-11"), birthPlace: "Denmark", rank: 5 },
    {firstName: "Eugenie", lastName: "Bouchard", dateOfBirth: new Date("1994-02-25"), birthPlace: "Canada", rank: 6 },
    {firstName: "Ana", lastName: "Ivanovic", dateOfBirth: new Date("1987-11-06"), birthPlace: "Serbia", rank: 7 },
    {firstName: "Navarro", lastName: "Carla Suarez", dateOfBirth: new Date("1988-09-03"), birthPlace:"Spain", rank: 8 },
    {firstName: "Ekaterina", lastName: "Makarova", dateOfBirth: new Date("1988-06-07"), birthPlace: "Russia", rank: 9 },
    {firstName: "Petkovic", lastName: "Andrea", dateOfBirth: new Date("1987-09-09"), birthPlace: "Germany", rank: 10 }
];

var iPosition =0 ;
var iPositionBestPlayer = 0;
var iPositionShortestFirstName = 0;


for (iPosition = 0; iPosition < aoSPORTSWOMEN.length; iPosition++ ) {
    if (aoSPORTSWOMEN[iPosition].rank == 1) {
        iPositionBestPlayer = iPosition;
    }
}
document.write("<br> Best player: " + aoSPORTSWOMEN[iPositionBestPlayer].firstName + " " +
    aoSPORTSWOMEN[iPositionBestPlayer].lastName  );

