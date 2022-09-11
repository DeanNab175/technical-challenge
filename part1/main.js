/* 
Author: Satyajit Nabeebacus
FrontEnd Engineer technical challenge
*/
const stickyElem = document.querySelector(".sticky-box");
let currStickyPos;

window.addEventListener('load', init());

window.addEventListener('resize', () => {
    init();
});

window.addEventListener('scroll', () => {
    /* Check if the current Y offset is greater than the position of the element */
    if(window.pageYOffset > currStickyPos) {
        // get the difference from Y offset and sticky position + 15px
        stickyElem.style.top = ((window.pageYOffset - currStickyPos) + 15) + "px";
    } else {
        stickyElem.style.top = "0px";
    }
});

function init() {
    currStickyPos = 0;
    /* Get sticky element current position in the page*/
    currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;

}