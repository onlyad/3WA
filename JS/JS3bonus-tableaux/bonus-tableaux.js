// création d'un tableau contenant des joueurs sous forme d'objet
var aTeam = [
    {
        firstName: 'David',
        lastName: 'de Gea',
        birthday: new Date('1990-11-07'),
        country: 'Spain'
    },
    {
        firstName: 'Victor',
        lastName: 'Valdés',
        birthday: new Date('1982-01-14'),
        country: 'Spain'
    },
    {
        firstName: 'Luke',
        lastName: 'Shaw',
        birthday: new Date('1995-07-12'),
        country: 'England'
    },
    {
        firstName: 'Angel',
        lastName: 'Di María',
        birthday: new Date('1988-02-14'),
        country: 'Argentina'
    },
    {
        firstName: 'Wayne',
        lastName: 'Rooney',
        birthday: new Date('1985-10-24'),
        country: 'England'
    },
    {
        firstName: 'Chris',
        lastName: 'Smalling',
        birthday: new Date('1989-11-22'),
        country: 'England'
    },
    {
        firstName: 'Marouane',
        lastName: 'Fellaini',
        birthday: new Date('1987-11-22'),
        country: 'Belgium'
    },
    {
        firstName: 'Robin',
        lastName: 'van Persie',
        birthday: new Date('1983-08-06'),
        country: 'Netherlands'
    },
    {
        firstName: 'Juan',
        lastName: 'Mata',
        birthday: new Date('1988-04-28'),
        country: 'Spain'
    },
    {
        firstName: 'Ashley',
        lastName: 'Young',
        birthday: new Date('1985-07-09'),
        country: 'England'
    },
    {
        firstName: 'Rafael',
        lastName: 'Da Silva',
        birthday: new Date('1990-07-09'),
        country: 'Brazil'
    }
];
var dToday = new Date();

// stats
document.write("<h1>Equipe de " + aTeam.length + " sportifs</h1>");


// Question 1
document.write("<h2> Age du premier sportif</h2>");
var iFirstAge = dToday.getFullYear() - aTeam[0].birthday.getFullYear();
document.write('<p>' + iFirstAge + '</p>');


// Question 2
document.write("<h2>Le nom complet du joueur ayant le prénom le plus court dans l'équipe</h2>");
var iShortestFirstNamePlayer = 0;
for (var iPlayerPosition = 1; iPlayerPosition < aTeam.length; iPlayerPosition++) {
    if (aTeam[iPlayerPosition].firstName.length < aTeam[iShortestFirstNamePlayer].firstName.length) {
        iShortestFirstNamePlayer = iPlayerPosition;
    }
}
document.write('<p>' + aTeam[iShortestFirstNamePlayer].firstName + " " + aTeam[iShortestFirstNamePlayer].lastName + '</p>');


// Question 3
document.write("<h2>La moyenne d'âge de l'équipe</h2>");
var iSumAges = 0;
for (iPlayerPosition = 0; iPlayerPosition < aTeam.length; iPlayerPosition++) {
    iSumAges += dToday.getFullYear() - aTeam[iPlayerPosition].birthday.getFullYear();
}
document.write('<p>' + (iSumAges / aTeam.length) + '</p>');


// Question 4
document.write("<h2>La nationalité qui revient le plus souvent</h2>");

var sCurrentCountryName;
var iCurrentCountrySize;
var iMaxCountrySize = 0;
var sMaxCountryName;

// parcours de tous les pays
for (iPlayerPosition = 0; iPlayerPosition < aTeam.length; iPlayerPosition++) {
    sCurrentCountryName = aTeam[iPlayerPosition].country;
    iCurrentCountrySize = 1;
    // deuxième parcours : tous les autres pays pour compter combien sont identiques
    for (var iNextPlayerPosition = 0; iNextPlayerPosition < aTeam.length; iNextPlayerPosition++) {
        // on ne prend pas en compte le pays en cours
        if (iNextPlayerPosition != iPlayerPosition && sCurrentCountryName == aTeam[iNextPlayerPosition].country) {
            iCurrentCountrySize++;
        }
    }

    // comparaison avec le maximum connu
    if (iCurrentCountrySize > iMaxCountrySize) {
        iMaxCountrySize = iCurrentCountrySize;
        sMaxCountryName = sCurrentCountryName;
    }
}
document.write('<p>' + sMaxCountryName + ", elle revient " + iMaxCountrySize + ' fois.</p>');
