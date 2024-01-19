(function($) {
$(document).ready(function() {
  // Gets the video src and the description from the data attributes
  var videoSrc;
  var description;
  var title;
  $('.video').click(function() {
    videoSrc = $(this).data("video");
    description = $(this).data("description");
    title = $(this).data('title');
  });
  
  // Assigns the video src and the description to the iframe and the p element when the modal is opened
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"); 
    $("#videoModal p").text(description);
    $("#videoModal h5").text(title);
  });
    
  // Removes the video src and the description when the modal is closed
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', ""); 
    $("#videoModal p").text("");
    $("#videoModal h5").text("");
  }); 
});
})(jQuery);