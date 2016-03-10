;(function(){
	/*$.post('/get/article/list',{pageSize: 10,page: 2},function(result){
		console.log('result:'+JSON.stringify(result));
	});*/
	$("#subOption").click(function(){
		var responseCode;
		$.ajax({
			type:"post",
			url:"/get/article/list",
			//data:{x:1,y:2},
			async:true,
			success:function(result){
				responseCode = JSON.stringify(result.value[1]);
				/*if(result.responseCode == "1202"){
					console.log("执行成功");
					var responseCode = JSON.stringify(result.value[1]);
					alert(responseCode);
				}else*/
				console.log('result:'+responseCode);
			},
			complete:function(xhr,textstatus){
				console.log('statusCode:%d,statusText:%s',xhr.status,xhr.statusText);
				console.log('textstatus:%s',textstatus);
				console.log('arguments:'+arguments);
			},
			statusCode:{
				'1202':function(xhr,textstatus,err){
					console.log(arguments);
					console.log(1202);
					//alert(responseCode);
				},
				"1203":function(){
					alert(1203);
				}
			},
			error:function(a,b,c){
				alert(arguments);
			}
		});
	});
	
})()
