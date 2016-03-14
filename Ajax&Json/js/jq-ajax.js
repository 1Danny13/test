;(function(){
	$('nav a').on('click',function(e){
		e.preventDefault();//阻止页面跳转
		var URL = this.href; //获取加载新页面的链接
		var $container = $('#container');
		//alert(URL);
		$('nav a.current').removeClass('current'); //更新链接标志
		$(this).addClass('current');
		$('#content').remove();
		
		$.ajax({
			type:'get',
			url:URL,
			timeout:2000,
			beforeSend:function(){
				$container.append('<div id="loading">Loading......</div>');
			},
			complete: function(){
				//alert(111);
				$('#loading').remove();
				
			},
			success: function(data){
				//alert(data);
				$container.html(data).hide().fadeIn(700);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {   
                    alert(XMLHttpRequest.status);  
                       alert(XMLHttpRequest.readyState);  
                       alert(textStatus);  
                alert('读取超时，请检查网络连接');  
            },  
		});
    // 在这里执行其他任务
	
    // 为上面的请求设置另一个完成函数
    //jqxhr.complete(function(){ alert("second complete"); });
	});
})()
