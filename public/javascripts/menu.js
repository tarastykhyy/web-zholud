$('document').ready(function() {
	$('#toggle').click(function(){
	 $(this).toggleClass('hover');
	 $('.overlay').toggleClass('open');
	 });
  });
//Animate scroll to ->div and close menu
  $(document).ready(function(){
	$("#overlay").on("click","a", function (event) {
	  var trigger1 = $('.wrapper'),
	  wrapper = $('#overlay');
	  trigger1.removeClass('hover');
	   wrapper.removeClass('open');
	});
  });