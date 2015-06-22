/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/
aImg2Display = [ "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
iPos = 0;

/***********************************************************************************/
/********************************** FONCTIONS SLIDER *******************************/
/***********************************************************************************/
function getNextImg (aImg2Display){
    if (iPos >= aImg2Display.length -1){
        iPos = 0;
    } else {
        iPos++;
    }
    return aImg2Display[iPos];
}
function getPreviousImg (aImg2Display){
    if (iPos <= 0){
        iPos = aImg2Display.length -1;
    } else {
        iPos--;
    }
    return  aImg2Display[iPos];
}


/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/
oTagImg = document.querySelector('img');
oButtonNext = document.querySelector("#btn_Next");
oButtonPrevious = document.querySelector("#btn_Previous");
oButtonRandom = document.querySelector("#btn_Random");
oButtonSlider = document.querySelector("#btn_Slider");
oButtonStopSlider = document.querySelector("#btn_StopSlider");
oButtonHideToolbar = document.querySelector("#btn_HideToolbar");

oButtonNext.onclick = function buttonNext () {
    oTagImg.src=getNextImg(aImg2Display);
};

oButtonPrevious.onclick = function buttonPrevious () {
    oTagImg.src=getPreviousImg(aImg2Display);
};

oButtonRandom.onclick = function buttonRandom () {
    oTagImg.src = aImg2Display[getRandBetweenMinAndMax(0, aImg2Display.length - 1 )];
};

oButtonSlider.onclick = function buttonSlider () {
    iSlider = setInterval(function () {
        oTagImg.src=getNextImg(aImg2Display);
    }, 1000);
};

oButtonStopSlider.onclick = function buttonStopSlider () {
    clearInterval(iSlider);
};

oButtonHideToolbar.onclick = function buttonHideToolbar () {
    if ("Hide Toolbar" == oButtonHideToolbar.innerHTML ) {
        document.querySelector(".toolBar").style.visibility = "hidden";
        oButtonHideToolbar.innerHTML = "Show Toolbar";
    } else {
        document.querySelector(".toolBar").style.visibility = "visible";
        oButtonHideToolbar.innerHTML = "Hide Toolbar";
    }

};