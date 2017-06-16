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
				scrollTop: $(hash).offset().top,
				easing:'swing'
			},300, function(){
				window.location.hash=hash;
			});
		}
	});
	var bannerImages=[
		{'src':'images/cimitero_di_san_michele_full.jpg','alt':'Image of Cimitero Di San Michele'},
		{'src':'images/burano_venice.jpg','alt':'Image of Burano, Venice'},
		{'src':'images/cimitero_di_san_michele_2_full.jpg','alt':'Image of Cimitero Di San Michele 2'},
	]
	var index=0;
	$('#banner-image').attr(bannerImages[index]);
	setInterval(function(){
    	$('#banner-image').fadeOut(1000,function(){
	    	if(index===bannerImages.length-1){
	    		index=0;
	    	}else{
	    		index++;
	    	}
    		$(this).attr(bannerImages[index])
    	}).fadeIn(1000);
	}, 15000);
})(window, document, $);