/**
 * Created by Dung on 2015-05-28.
 */


//function displayPhrase (sPhrase, iRepeatNumber) {
//    var bFirstTime = true;
//    for (var iCount = 1; iCount <= iRepeatNumber; iCount++ ){
//        if (1 == iCount) {
//            document.write("<h1>" + sPhrase + "</h1>");
//        } else if ( 2 <= iCount && iCount <=3 ) {
//            document.write("<h2>" + sPhrase + "</h2>");
//        } else if ( 4 <= iCount  && iCount <= 10){
//            document.write("<p>" + sPhrase + "</p>");
//        } else {
//            if (bFirstTime) {
//                document.write("<ul>");
//                bFirstTime = false;
//            }
//            document.write("<li>" + sPhrase + "</li>");
//            if (iCount == iRepeatNumber ) {
//                document.write("</ul>");
//            }
//        }
//    }
//}

//function displayPhrase (sPhrase, iRepeatNumber) {
//    var bFirstTime = true;
//    if (1 == iRepeatNumber) {
//        document.write("<h1> h1 " + sPhrase + "</h1>");
//    }
//    else if (3 >= iRepeatNumber) {
//        document.write("<h1> h1" + sPhrase + "</h1>");
//        for (var iCount = 2; iCount <= iRepeatNumber; iCount++) {
//            document.write("<h2> h2 " + sPhrase + "</h2>");
//        }
//    }
//
//    else if ( 10 >= iRepeatNumber){
//        document.write("<h1> h1" + sPhrase + "</h1>");
//        for (var iCount = 2; iCount <= 3; iCount++) {
//            document.write("<h2> h2 " + sPhrase + "</h2>");
//        }
//        for (var iCount = 4; iCount <= iRepeatNumber; iCount++) {
//            document.write("<p> p " + sPhrase + "</p>");
//        }
//    }
//    else {
//        document.write("<h1> h1" + sPhrase + "</h1>");
//        for (var iCount = 2; iCount <= 3; iCount++) {
//            document.write("<h2> h2 " + sPhrase + "</h2>");
//        }
//        for (var iCount = 4; iCount <= 10; iCount++) {
//            document.write("<p> p " + sPhrase + "</p>");
//        }
//        document.write("<ul>");
//        for (var iCount = 11; iCount <= iRepeatNumber; iCount++) {
//            document.write("<li> li " + sPhrase + "</li>");
//        }
//    }
//}
/**
 *  Bonus
* Ajouter les conditions suivantes :
 * la première phrase sera entourée des balises <h1>
* les 2 et 3ème, des balises <h2>
* les 4 à 10, balises <p>
* au delà, balises<li>
 */
function writePhraseNthTime (sPhrase, iNth) {
    if (iNth > 0) {
        document.write("<h1> h1 " + sPhrase + "</h1>");
        iNth--;
    }
    if (iNth > 0) {
        for (var i2To3Position = 1; i2To3Position <= 2 &&  iNth > 0; i2To3Position++) {
            document.write("<h2> h2 " + sPhrase + "</h2>");
            iNth--;
        }
    }
    if (iNth > 0) {
        for ( var i4To10Position = 1; i4To10Position <= (10 - 4) && iNth > 0; i4To10Position++  ) {
            document.write("<p> p " + sPhrase + "</p>");

        }


    }
}


function defTagsPosition (sTag, iPosStart, iPosEnd) {
    var oTags = { h1Start: 1, h1End: 1, h2Start: 2, h2End: 3, pStart: 4, pEnd: 10, liStart: 11, liEnd: 1000 };

    switch (sTag){
        case "h1":
            oTags.h1Start = iPosStart;
            oTags.h1End = iPosEnd;
            break;
        case "h2":
            oTags.h2Start = iPosStart;
            oTags.h2End   = iPosEnd;
    }
    document.write(oTags.h1Start + " " + oTags.h1End);

}

