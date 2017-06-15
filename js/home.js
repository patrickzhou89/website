(function(window, document, $, undefined){
	$('#mobile-menu-icon').on('click',function(){
		$(this).toggleClass('toggle-menu');
		$('#header').slideToggle();
	});
	$("a").on('click',function(e){
		if(this.hash !==""){
			e.preventDefault();
			var hash=this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},400, function(){
				window.location.hash=hash;
			});
		}
	});
})(window, document, $);