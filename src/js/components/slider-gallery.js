const handleScrollButtonClick = (direction, index) => {
    const scrollSelector = `.js-gallery-images`;
    const element = document.querySelector(scrollSelector);
    const speed = 25;
    const distance = 900;
    const step = 20;
    let scrollAmount = 0;

    const slideTimer = setInterval(function(){
        if(direction == 'left'){
                element.scrollLeft -= step;
        } else {
                element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
        }
    }, speed);
}