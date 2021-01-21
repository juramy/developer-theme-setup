
class SlideShow {

  constructor(slideshowElement) {
    this.slideshowElement = slideshowElement
    this.slideSection = '.js-section-slideshow'
    this.slideSelector = '.js-slides'
    this.prevButtonSelector = '.js-slider-button-prev'
    this.nextButtonSelector = '.js-slider-button-next'
    this.prevButton = slideshowElement.querySelector(prevButtonSelector)
    this.nextButton = slideshowElement.querySelector(nextButtonSelector)
    const slides = this.slideshowElement.querySelector(this.slideSection)
    this.setup();
  }

  setup(){
      const shouldAutoplay = this.slideshowElement.getAttribute('data-autoplay') === 'true'
      const autoplaySpeed = parseInt(this.slideshowElement.getAttribute('data-autoplay-speed'))

      sectionSlideshowOptions = {
        fade: true,
        nextArrow: this.nextButton,
        prevArrow: this.prevButton,
        autoplay: shouldAutoplay,
        autoplaySpeed: autoplaySpeed
    }
    if (this.slides.children.length > 1) {
      this.slides.slick(sectionSlideshowOptions);
    }
  }
}