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
	
	$('body').wrapInner($pageWrapper).append($slideHeader);
	
	function slideHeaderGo(){
		$('#slideHeader').toggleClass('change');
		$('#page-wrapper').toggleClass('pushed');
		$('#slideHeader--mask').toggleClass('is-active');
		$('body').toggleClass('has-active-slideHeader');
	}
	
	$('.slideHeader--trigger, #slideHeader--mask, .slideHeader--close').on('click', function(e){
		e.preventDefault();
		slideHeaderGo();
	});
	
	$('.slideHeader--link').click(function(e) {
		e.preventDefault();
		slideHeaderGo();
		var goTo = this.getAttribute("href");
		setTimeout(function(){ window.location = goTo; }, 300);
	});
}