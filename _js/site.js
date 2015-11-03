$(document).ready(function(){
	
	//setup everything
	initialize();
	
});

function initialize(){

	slideHeader();
	
}


function slideHeader(){
	
	$('#nav-icon').on('click', function(e){
		var buffer = 10;
		var $headerWidth = $('#Site-header').outerWidth();
		var $siteHeader = $('#Site-header');
		var $mainContent = $('#main-content');
		
		$siteHeader.toggleClass('slideLeft');
		$mainContent.toggleClass('slideLeft');
		
		e.preventDefault();
	});
	
}