/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/

// Objet contenant la position du slider.
var iSliderPosition = 0;

// La liste des aImageSlides.
var aImageSlides =
    [
        {image: 'images/1.jpg', caption: 'Photo 1'},
        {image: 'images/2.jpg', caption: 'Photo 2'},
        {image: 'images/3.jpg', caption: 'Photo 3'},
        {image: 'images/4.jpg', caption: 'Photo 4'},
        {image: 'images/5.jpg', caption: 'Photo 5'},
        {image: 'images/6.jpg', caption: 'Photo 6'}
    ];

// Intervalle
var oInterval, oToolbarInterval;

// toolbar opacity
var iToolbarOpacity;

/***********************************************************************************/
/********************************** FONCTIONS SLIDER *******************************/
/***********************************************************************************/

/**
 * Change the slider image.
 * Will change image, alternative text and caption
 *
 * @param integer iPosition image position to change.
 */
function changeImage(iPosition) {
    document.querySelector('section > figure > img').src = aImageSlides[iPosition].image;
    document.querySelector('section > figure > img').alt = aImageSlides[iPosition].caption;
    document.querySelector('section > figure > figcaption').innerHTML = aImageSlides[iPosition].caption;
}


/**
 * Increase the image slider.
 * Next image will be displayed.
 * If slider is in the last image, then it will loop back to the first one.
 */
function increaseSlider() {
    iSliderPosition++;
    if (iSliderPosition >= aImageSlides.length) {
        iSliderPosition = 0;
    }
    changeImage(iSliderPosition);
}

/**
 * Decrease the image slider.
 * Previous image will be displayed.
 * If slider is on the first image, then it will loop to the last one.
 */
function decreaseSlider() {
    iSliderPosition--;
    if (iSliderPosition < 0) {
        iSliderPosition = aImageSlides.length - 1;
    }
    changeImage(iSliderPosition);
}


/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/


document.querySelector('#js-slider-previous').onclick = decreaseSlider;
document.querySelector('#js-slider-next').onclick = increaseSlider;

document.querySelector('#random').onclick = function () {
    iSliderPosition = getRandomInteger(0, aImageSlides.length - 1);
    changeImage(iSliderPosition);
};
document.querySelector('#startAuto').onclick = function () {
    oInterval = setInterval(increaseSlider, 500);
};
document.querySelector('#stopAuto').onclick = function () {
    clearInterval(oInterval);
};
document.querySelector('button#toolbarButton').onclick = function () {
    var oButton = this;
    var oToolbar = document.querySelector('#toolbar');

    if (oButton.innerHTML == 'Masquer les options') {
        iToolbarOpacity = 1;
        oToolbarInterval = setInterval(function () {
            iToolbarOpacity -= .05;
            oToolbar.style.opacity = iToolbarOpacity;
            if (iToolbarOpacity <= 0) {
                clearInterval(oToolbarInterval);
                oToolbar.style.visibility = 'hidden';
                oButton.innerHTML = 'Afficher les options';
            }
        }, 50);
    } else {
        oToolbar.style.visibility = 'visible';
        iToolbarOpacity = 0;
        oToolbarInterval = setInterval(function () {
            iToolbarOpacity += .03;
            oToolbar.style.opacity = iToolbarOpacity;
            if (iToolbarOpacity >= 1) {
                clearInterval(oToolbarInterval);
                oButton.innerHTML = 'Masquer les options';
            }
        }, 50);
    }
};

changeImage(iSliderPosition);