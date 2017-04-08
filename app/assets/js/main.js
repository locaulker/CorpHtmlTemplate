$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons

      slideSpeed : 300,
      paginationSpeed : 400,

      // Autoplay
      autoPlay : false,
      goToFirst : true,
      goToFirstSpeed : 1000,

      // Navigation
      // navigation : false,
      // navigationText : ["prev","next"],
      // pagination : true,
      // paginationNumbers: true,

      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false

//    //Basic Speeds
//    slideSpeed : 200,
//    paginationSpeed : 800,
//
//    //Autoplay
//    autoPlay : true,
//    goToFirst : true,
//    goToFirstSpeed : 1000,
//
//    // Navigation
//    navigation : false,
//    navigationText : ["prev","next"],
//    pagination : true,
//    paginationNumbers: true,
//
//    // Responsive
//    responsive: true,
//    items : 5,
//    itemsDesktop : [1199,4],
//    itemsDesktopSmall : [980,3],
//    itemsTablet: [768,2],
//    itemsMobile : [479,1]

  });

});
