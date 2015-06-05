/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/
const iMAX_IMAGES = 6;
const iMIN_IMAGES = 1;
const iMIN_OPACITY = 0;
const iMAX_OPACITY = 1;

var iIntervalMillisec = 3000;

var fOpacity ;



/***********************************************************************************/
/********************************** FONCTIONS SLIDER *******************************/
/***********************************************************************************/

var iIndex = 1;
var iSlider;
var iTimer1, iTimer2;



oTagImg = document.querySelector("img");
oButtonNext = document.querySelector("#btn_next");
oButtonPrevious = document.querySelector("#btn_previous");
oButtonRandom = document.querySelector("#btn_random");

oButtonNext.onclick = function () {

    fOpacity = 1;
    iTimer1 = setInterval(function(){
        //alert ("setInterval 1");
        if (fOpacity > iMIN_OPACITY) {
            fOpacity -= 0.1;
            oTagImg.style.opacity = fOpacity;
        } else {

            clearInterval(iTimer1);
            //alert("1images/" + iIndex + ".jpg");
            iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
            oTagImg.src = "images/" + iIndex + ".jpg";
            document.querySelector("section > figure > figcaption").innerHTML = "Photo " + iIndex;
            alert("Images " + iIndex + "fOpacity = " + oTagImg.style.opacity);
            oTagImg.style.opacity = iMIN_OPACITY;
            //alert("2images/" + iIndex + ".jpg");
            iTimer2 = setInterval(function(){
                //alert ("setInterval 2");
                if (fOpacity < iMAX_OPACITY) {
                    fOpacity += 0.1;
                    oTagImg.style.opacity = fOpacity;
                } else {

                    clearInterval(iTimer2);
                    //alert("ClearInterval " + iTimer2);
                }
            }, 500);
            //oTagImg.style.opacity = iMAX_OPACITY;
            //alert("ClearInterval " + iTimer1);
        }
    }, 500);

};
oButtonNext.onmouseover =  function () {

    //iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
    //oTagImg.src = "images/" + iIndex + ".jpg";

    fOpacity = 1;
    iTimer1 = setInterval(function(){
        //alert ("setInterval 1");
        if (fOpacity > 0) {
            fOpacity -= 0.1;
            oTagImg.style.opacity = fOpacity;
        } else {

            clearInterval(iTimer1);
            //alert("1images/" + iIndex + ".jpg");
            iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
            oTagImg.src = "images/" + iIndex + ".jpg";
            alert("Images " + iIndex + "fOpacity = " + oTagImg.style.opacity);
            oTagImg.style.opacity = 0;
            //alert("2images/" + iIndex + ".jpg");
            iTimer2 = setInterval(function(){
                //alert ("setInterval 2");
                if (fOpacity < 1) {
                    fOpacity += 0.1;
                    oTagImg.style.opacity = fOpacity;
                } else {

                    clearInterval(iTimer2);
                    //alert("ClearInterval " + iTimer2);
                }
            }, 500);
            //oTagImg.style.opacity = 1;
            //alert("ClearInterval " + iTimer1);
        }
    }, 500);

};

oButtonPrevious.onclick = function () {
    iIndex = getPreviousDecr4Slider(iMIN_IMAGES, iMAX_IMAGES, 1);
    oTagImg.src = "images/" + iIndex + ".jpg";

};

oButtonPrevious.onmouseover =  function () {

    iIndex = getPreviousDecr4Slider(iMIN_IMAGES, iMAX_IMAGES, 1);
    oTagImg.src = "images/" + iIndex + ".jpg";

};

oButtonRandom.onclick = function() {
    iIndex = getRandIntBetweenMinAndMax(iMIN_IMAGES, iMAX_IMAGES);
    oTagImg.src = "images/" + iIndex + ".jpg";
};

function btn_Slider () {
    iSlider = setInterval(function(){
        iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
        oTagImg.src = "images/" + iIndex + ".jpg";

    }, iIntervalMillisec);
}

function btn_StopSlider() {
    clearInterval(iSlider);
}

function btn_HideToolbar() {
    if ("Hide Buttons" == document.querySelector("#btn_hideToolbar").innerHTML ) {
        document.querySelector("#btn_previous").style.visibility = "hidden";
        document.querySelector("#btn_next").style.visibility = "hidden";
        document.querySelector("#btn_random").style.visibility = "hidden";
        document.querySelector("#btn_slider").style.visibility = "hidden";
        document.querySelector("#btn_stopSlider").style.visibility = "hidden";
        document.querySelector("#btn_hideToolbar").innerHTML = "Show Buttons"
    } else {
        document.querySelector("#btn_previous").style.visibility = "visible";
        document.querySelector("#btn_next").style.visibility = "visible";
        document.querySelector("#btn_random").style.visibility = "visible";
        document.querySelector("#btn_slider").style.visibility = "visible";
        document.querySelector("#btn_stopSlider").style.visibility = "visible";
        document.querySelector("#btn_hideToolbar").innerHTML = "Hide Buttons"
    }
}
/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/
