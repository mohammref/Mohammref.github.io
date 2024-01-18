(function($) {
$(document).ready(function() {
  // Gets the video src from the data-video attribute
  var videoSrc;
  $('.video').click(function() {
    videoSrc = $(this).data( "video" );
  });
  
  // Assigns the video src to the iframe when the modal is opened
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
    
  // Removes the video src when the modal is closed
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#videoModal iframe").attr('src', ""); 
  }) 
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