/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/
const iMAX_IMAGES = 6;
const iMIN_IMAGES = 1;
const iMIN_OPACITY = 0;
const iMAX_OPACITY = 1;

var iIntervalMillisec = 3000;

var iOpacity;
var sImageDir = "images/";
var random_display = 0;
var interval = 1500;


/***********************************************************************************/
/********************************** FONCTIONS SLIDER *******************************/
/***********************************************************************************/

var iIndex = 1;
var iSlider;
var iTimer1, iTimer2;


oTagImg = document.querySelector("img");
oButtonNext = document.querySelector(".btn-next");
oButtonPrevious = document.querySelector(".btn-previous");
oButtonRandom = document.querySelector(".btn-random");

oButtonNext.onclick = function () {
    iOpacity = 1

    iTimer1 = setInterval(function () {
        if (iOpacity > 0) {
            iOpacity -= 0.1;
            oTagImg.style.opacity = iOpacity;
        } else {
            clearInterval(iTimer1);
            iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
            oTagImg.src = "images/" + iIndex + ".jpg";
            //oTagImg.style.opacity = 1;
            iTimer2 = setInterval(function () {
                if (iOpacity < 1) {
                    iOpacity += 0.1;
                    oTagImg.style.opacity = iOpacity;
                } else {
                    clearInterval(iTimer2);

                }
            }, 100);
        }
    }, 100);
    oTagImg.style.opacity = 1;


};
oButtonNext.onmouseover = function () {

    iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
    oTagImg.src = "images/" + iIndex + ".jpg";


};

oButtonPrevious.onclick = function () {
    iIndex = getPreviousDecr4Slider(iMIN_IMAGES, iMAX_IMAGES, 1);
    oTagImg.src = "images/" + iIndex + ".jpg";

};

oButtonPrevious.onmouseover = function () {

    iIndex = getPreviousDecr4Slider(iMIN_IMAGES, iMAX_IMAGES, 1);
    oTagImg.src = "images/" + iIndex + ".jpg";

};

oButtonRandom.onclick = function () {
    iIndex = getRandIntBetweenMinAndMax(iMIN_IMAGES, iMAX_IMAGES);
    oTagImg.src = "images/" + iIndex + ".jpg";
}

function btn_Slider() {
    iSlider = setInterval(function () {
        iIndex = getNextIncr4Slider(iMIN_IMAGES, iMAX_IMAGES);
        oTagImg.src = "images/" + iIndex + ".jpg";

    }, iIntervalMillisec);
}

function btn_StopSlider() {
    clearInterval(iSlider);
}

function btn_HideButtons() {
    if ("Hide Buttons" == document.querySelector(".btn-hideButtons").innerHTML) {
        document.querySelector(".btn-previous").style.visibility = "hidden";
        document.querySelector(".btn-next").style.visibility = "hidden";
        document.querySelector(".btn-random").style.visibility = "hidden";
        document.querySelector(".btn-slider").style.visibility = "hidden";
        document.querySelector(".btn-stopSlider").style.visibility = "hidden";
        document.querySelector(".btn-hideButtons").innerHTML = "Show Buttons"
    } else {
        document.querySelector(".btn-previous").style.visibility = "visible";
        document.querySelector(".btn-next").style.visibility = "visible";
        document.querySelector(".btn-random").style.visibility = "visible";
        document.querySelector(".btn-slider").style.visibility = "visible";
        document.querySelector(".btn-stopSlider").style.visibility = "visible";
        document.querySelector(".btn-hideButtons").innerHTML = "Hide Buttons"
    }
}
/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/
