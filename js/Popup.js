(function($) {
$(document).ready(function() {
  // Gets the video src and the description from the data attributes
  var videoSrc;
  var description;
  $('.video').click(function() {
    videoSrc = $(this).data("video");
    description = $(this).data("description");
  });
  
  // Assigns the video src and the description to the iframe and the p element when the modal is opened
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"); 
    $("#videoModal p").text(description);
  });
    
  // Removes the video src and the description when the modal is closed
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', ""); 
    $("#videoModal p").text("");
  }); 
});



$(document).ready(function() {
  $('.project').click(function() {
    var title = $(this).find('.text h3').text();
    var description = $(this).find('.text p').text();

    $('#project-modal-title').text(title);
    $('#project-modal-description').text(description);
  });
});
})(jQuery);