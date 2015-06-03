/******************************************/
/******            Partie 1           *****/
/******************************************/
/*   afficher une phrase plusieurs fois   */
/******************************************/
document.write("<h1>Partie 1</h1>");
nthSentences(3);


/******************************************/
/******            Partie 2           *****/
/******************************************/
/*   afficher une phrase plusieurs fois   */
/*   en choisissant la phrase             */
/******************************************/
document.write("<h1>Partie 2</h1>");
nthSentences2(2, 'on test deux fois ici');
nthSentences2(10, "Dix fois c'est top!");
nthSentences2(1, "Ma super phrase une seule fois :'(");


/******************************************/
/******            BONUS              *****/
/******************************************/
document.write("<h1>BONUS</h1>");

nthSentencesBonus(2, "On test cela...");
nthSentencesBonus(15, "On test cela...");