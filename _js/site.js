$(document).ready(function(){
	
	//setup everything
	initialize();
	
});

function initialize(){

	slideHeader();
	
}


function slideHeader(){
	
	// Must be separate from content that is pushed
	var $slideHeader, $pageWrapper;
	
	$slideHeader = $('#Site-header');	
	$pageWrapper = '<div id="page-wrapper"></div>';
	
	$('body').wrapInner($pageWrapper).append($slideMenu);
	
	function slideMenuGo(){
		$('#slideMenu').toggleClass('change');
		$('#page-wrapper').toggleClass('pushed');
		$('#slideMenu--mask').toggleClass('is-active');
		$('body').toggleClass('has-active-slideMenu');
	}
	
	$('.slideMenu--trigger, #slideMenu--mask, .slideMenu--close').on('click', function(e){
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