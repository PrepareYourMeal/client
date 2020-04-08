class BrowseRecipePageScripts {
  static runLibraryScripts = () => {
    const $ = window.$;
    var config = {
      ".chosen-select": { disable_search_threshold: 10, width: "100%" },
      ".chosen-select-deselect": { allow_single_deselect: true, width: "100%" },
      ".chosen-select-no-single": {
        disable_search_threshold: 10,
        width: "100%"
      },
      ".chosen-select-no-results": { no_results_text: "Oops, nothing found!" },
      ".chosen-select-width": { width: "95%" }
    };
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    $(".adv-search-btn").click(function(event) {
      var slideDuration = 200;

      if ($(this).hasClass("opened")) {
        $(".adv-search-btn").removeClass("active");
        $(this)
          .removeClass("opened")
          .find("i")
          .addClass("fa-caret-down")
          .removeClass("fa-caret-up");
        $(".extra-search-options")
          .stop(true, true)
          .fadeOut({ duration: slideDuration, queue: false })
          .slideUp(slideDuration);
      } else {
        $(".adv-search-btn").addClass("active");
        $(this)
          .addClass("opened")
          .find("i")
          .addClass("fa-caret-up")
          .removeClass("fa-caret-down");
        $(".extra-search-options")
          .removeClass("closed")
          .stop(true, true)
          .fadeIn({ duration: slideDuration, queue: false })
          .css("display", "none")
          .slideDown(slideDuration);
      }
      event.preventDefault();
    });
    setTimeout(() => {
      var $container = $(".isotope");
      $container.isotope({
        itemSelector: ".recipe-box, .isotope-box",
        layoutMode: "masonry"
      });
    }, 500);
  };
}

export default BrowseRecipePageScripts;
