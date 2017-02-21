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
