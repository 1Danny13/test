;(function(){
	$('#myform').on('submit',function(e){
		e.preventDefault();
		var details = $('#myform').serialize();
		$.post(
			'register.php',
			details,
			function(data){
				$('#myform').html(data);
			}
		);
	});
})()
