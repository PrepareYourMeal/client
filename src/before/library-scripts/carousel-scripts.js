class CarouselScripts {
  static runLibraryScripts = () => {
    var rsi = window
      .$("#homeSlider")
      .royalSlider({
        controlNavigation: "thumbnails",
        imageScaleMode: "fill",
        arrowsNav: false,
        arrowsNavHideOnTouch: true,
        slidesSpacing: 0,

        fullscreen: false,
        loop: false,

        thumbs: {
          firstMargin: false,
          paddingBottom: 0,
          spacing: 0
        },

        numImagesToPreload: 3,
        thumbsFirstMargin: false,

        keyboardNavEnabled: true,
        navigateByClick: false,
        fadeinLoadedSlide: true,
        transitionType: "fade",

        block: {
          fadeEffect: true,
          moveEffect: "top",
          delay: 0
        }
      })
      .data("royalSlider");
    window.$("#slider-next").click(function() {
      rsi.next();
    });
    window.$("#slider-prev").click(function() {
      rsi.prev();
    });
  };
}

export default CarouselScripts;
