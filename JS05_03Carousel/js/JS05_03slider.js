/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/
const iMAX_IMAGES = 6;
const iMIN_IMAGES = 1;
const iMIN_OPACITY = 0;
const iMAX_OPACITY = 1;

var iIntervalMillisec = 1000;

var fImgOpacity ;

var iIndex = 1;
var iSlider;
var iImgActualInterval, iImgNextInterval;
var oTagImg;

/***********************************************************************************/
/********************************** FONCTIONS SLIDER *******************************/
/***********************************************************************************/


/**
 * Get the next Incrementation for a slider. If user reach max, then min value is return.
 * @param {int} iMin minimum value for the slider
 * @param {int} iMax maximum value for the slider
 * @returns {int} the next number
 */
function getNextImg4Slider(iMin, iMax) {
    if (iIndex >= iMax) {
        iIndex = iMin;
    } else {
        iIndex++;

    }
    return iIndex;
}
/**
 * Get the next Decrementation for a slider. If user reach min, then max value is return.
 * @param {int} iMin minimum value for the slider
 * @param {int} iMax maximum value for the slider
 * @param {int} iStep value to be decreased each time
 * @returns {int} the previous number
 */
function getPreviousImg4Slider(iMin, iMax, iStep) {
    if (iIndex <= iMin ) {
        iIndex = iMax;
    } else {
        iIndex -= iStep;
    }

    return iIndex;
}
/**
 * Display an image according to its index / position
 * @param {int} iIndex the image index name by number. Example : "1.jpg"
 * @constructor
 */

function showImg(iIndex){

    fImgOpacity = 1;
    iImgActualInterval = setInterval(function(){
        //alert ("setInterval 1");

        fImgOpacity -= 0.10;
        oTagImg.style.opacity = fImgOpacity;
        if (fImgOpacity <= iMIN_OPACITY) {

            clearInterval(iImgActualInterval);
            document.querySelector("img").src = "images/" + iIndex + ".jpg";
            document.querySelector("section > figure > figcaption").innerHTML = " " + iIndex;
            oTagImg.style.opacity = iMIN_OPACITY;
            iImgNextInterval = setInterval(function(){
                //alert ("setInterval 2");
                fImgOpacity += 0.10;
                oTagImg.style.opacity = fImgOpacity;
                if (fImgOpacity >= iMAX_OPACITY) {

                    clearInterval(iImgNextInterval);
                    oTagImg.style.opacity = 1;
                    //alert("ClearInterval " + iImgNextInterval);
                }
            }, 50);

        }
    }, 50);
}

/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

oTagImg = document.querySelector("img");
oTagFigCaption = document.querySelector("section>figure>figCaption");
oButtonNext = document.querySelector("#btn_next");
oButtonPrevious = document.querySelector("#btn_previous");
oButtonRandom = document.querySelector("#btn_random");
oButtonSlider = document.querySelector("#btn_slider");
oButtonStopSlider = document.querySelector("#btn_stopSlider");
oButtonHideToolbar = document.querySelector("#btn_hideToolbar");

oButtonNext.onclick = function () {


    iIndex = getNextImg4Slider(iMIN_IMAGES, iMAX_IMAGES);
    showImg(iIndex);


};
oButtonNext.onmouseover =  function () {

    //iIndex = getNextImg4Slider(iMIN_IMAGES, iMAX_IMAGES);
    //oTagImg.src = "images/" + iIndex + ".jpg";


            iIndex = getNextImg4Slider(iMIN_IMAGES, iMAX_IMAGES);

            showImg(iIndex);

};

oButtonPrevious.onclick = function () {
    iIndex = getPreviousImg4Slider(iMIN_IMAGES, iMAX_IMAGES, 1);
    showImg(iIndex);

};

oButtonPrevious.onmouseover =  function () {
    iIndex = getPreviousImg4Slider(iMin, iMax, 1);
    showImg(iIndex);
};

oButtonRandom.onclick = function() {
    iIndex = getRandIntBetweenMinAndMax(iMIN_IMAGES, iMAX_IMAGES);
    showImg(iIndex);
};

oButtonSlider.onclick = function btn_Slider () {
    iSlider = setInterval(function(){
        iIndex = getNextImg4Slider(iMIN_IMAGES, iMAX_IMAGES);
        showImg(iIndex);

    }, iIntervalMillisec);
};

oButtonStopSlider.onclick = function btn_StopSlider() {
    clearInterval(iSlider);
};

oButtonHideToolbar.onclick = function btn_HideToolbar() {
    oToolbar = document.querySelector("#toolbar");

    if ("Hide Buttons" == document.querySelector("#btn_hideToolbar").innerHTML ) {
        document.querySelector("#btn_hideToolbar").innerHTML = "Show Buttons"
        oToolbar.style.visibility = "hidden";

        //document.querySelector("#btn_previous").style.visibility = "hidden";
        //document.querySelector("#btn_next").style.visibility = "hidden";
        //document.querySelector("#btn_random").style.visibility = "hidden";
        //document.querySelector("#btn_slider").style.visibility = "hidden";
        //document.querySelector("#btn_stopSlider").style.visibility = "hidden";

    } else {
        document.querySelector("#btn_hideToolbar").innerHTML = "Hide Buttons"
        oToolbar.style.visibility = "visible";
        //document.querySelector("#btn_previous").style.visibility = "visible";
        //document.querySelector("#btn_next").style.visibility = "visible";
        //document.querySelector("#btn_random").style.visibility = "visible";
        //document.querySelector("#btn_slider").style.visibility = "visible";
        //document.querySelector("#btn_stopSlider").style.visibility = "visible";

    }
};

