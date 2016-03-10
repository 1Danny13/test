;(function(){
	$("nav a").on('click',function(e){
		e.preventDefault(); //阻止跳转
		var url = $(this).attr('href'); //记录要跳转的链接
		$('nav a.current').removeClass('current');
		$(this).addClass('current');
		
		$('#content').remove();
		$('#container').load(url + ' #content').hide().fadeIn('slow');
	});
})()
