/*SUPERSLIDES*/
$(function() {
  $('#superSlides').superslides({ hashchange: false, play: 12000 });
  $('#superSlides').on('mouseenter', function() { $(this).superslides('stop'); console.log('Stopped') });
  $('#superSlides').on('mouseleave', function() { $(this).superslides('start'); console.log('Started') });
});
/*!SUPERSLIDES*/

/*OWL CAROUSEL*/
$(document).ready(function() {
  var swfuImage = $("#swfu-image");
  swfuImage.owlCarousel({
    itemsCustom : [
      [0, 1]
    ],
    pagination : true, navigation : false, mouseDrag : true, autoPlay : true, stopOnHover : true, lazyLoad : true, slideSpeed : 200, paginationSpeed : 800
  });
});
/*!OWL CAROUSEL*/

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
