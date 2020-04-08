class RecipePageScripts {
  static runLibraryScripts = () => {
    setTimeout(() => {
      window.$(".recipeSlider").royalSlider({

        imageScalePadding: 0,
        keyboardNavEnabled: true,

        navigateByClick: false,
        fadeinLoadedSlide: true,
        arrowsNavAutoHide: false,

        imageScaleMode: 'fill',
        arrowsNav: true,
        slidesSpacing: 0,

    });
    }, 0);
  };
}

export default RecipePageScripts;
