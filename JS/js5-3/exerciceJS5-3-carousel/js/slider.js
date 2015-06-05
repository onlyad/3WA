/***********************************************************************************/
/*********************************** DONNEES SLIDER ********************************/
/***********************************************************************************/

// variable contenant la position du slider.
var iSliderPosition = 0;

// La liste des images à changer.
var aImageSlides =
        [
            {image: 'images/1.jpg', caption: 'Photo 1'},
            {image: 'images/2.jpg', caption: 'Photo 2'},
            {image: 'images/3.jpg', caption: 'Photo 3'},
            {image: 'images/4.jpg', caption: 'Photo 4'},
            {image: 'images/5.jpg', caption: 'Photo 5'},
            {image: 'images/6.jpg', caption: 'Photo 6'}
        ];


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


/***********************************************************************************/
/********************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/


// événement click sur le bouton précédent
document.querySelector('#js-slider-previous').onclick = function () {
    iSliderPosition--;
    if (iSliderPosition < 0) {
        iSliderPosition = aImageSlides.length - 1;
    }
    changeImage(iSliderPosition);
};

// événement click sur le bouton suivant
document.querySelector('#js-slider-next').onclick = function () {
    iSliderPosition++;
    if (iSliderPosition >= aImageSlides.length) {
        iSliderPosition = 0;
    }
    changeImage(iSliderPosition);
};


// set the first image
changeImage(iSliderPosition);