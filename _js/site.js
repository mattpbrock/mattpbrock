$(document).ready(function(){
	
	//setup everything
	initialize();
	
});

function initialize(){

	slideMenu();
	
}


function slideMenu(){
	
	// Must be separate from content that is pushed
	var $slideMenu, $pageWrapper, $floatingTrigger, $floatingLogo;
	
	$slideMenu = $('#slideMenu').detach();	
	$pageWrapper = '<div id="page-wrapper"></div>';
	
	$floatingTrigger  = '<div class="slideMenu--floating-trigger">';
	$floatingTrigger += '<span class="slideMenu--text">Menu</span>';
	$floatingTrigger += '<img src="/_img/menu-hamb-515050.png" class="slideMenu--hamb-icon">';
	$floatingTrigger += '</div>';
	
	$floatingLogo  = '<div class="floating-logo"><a href="#">';
	$floatingLogo += '<img src="/_img/fbc-cross_color.png">';
	$floatingLogo += '</a></div>';
	
	$('body').wrapInner($pageWrapper).append($slideMenu).prepend($floatingTrigger);
	$('body').prepend($floatingLogo);
	
	function slideMenuGo(){
		$('#slideMenu').toggleClass('change');
		$('#page-wrapper, .slideMenu--floating-trigger').toggleClass('pushed');
		$('#slideMenu--mask').toggleClass('is-active');
		$('body').toggleClass('has-active-slideMenu');
	}
	
	$('.slideMenu--trigger, .slideMenu--floating-trigger, #slideMenu--mask, .slideMenu--close').on('click', function(e){
		e.preventDefault();
		slideMenuGo();
	});
	
	$('.slideMenu--link').click(function(e) {
		e.preventDefault();
		slideMenuGo();
		var goTo = this.getAttribute("href");
		setTimeout(function(){ window.location = goTo; }, 300);
	});
}