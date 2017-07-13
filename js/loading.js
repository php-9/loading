$(function(){
	$('body').append('<div class="loading"><div class="pic"><i></i><i></i><i></i><i></i><i></i></div></div>');
})
document.onreadystatechange=function(){
	if(document.readyState=="complete"){			
		$('.loading').fadeOut();
	}
}