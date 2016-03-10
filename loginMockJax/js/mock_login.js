;(function(){
	var config = [{
		url: '/get/article/login',
		responseText: {
//			code: 200,
//			readyState:4,
			status:200,
			responseCode:1203,
			user: []
		},
		response: function(rq){
			console.log("rq.data:"+rq);
			this.responseText.user.push({
				mock_name:"joe",
				mock_pwd:"111"
			});
			
		}
	}];
	for(var i = 0;i < config.length;i++){
		//alert(config.length);
		$.mockjax(config[i]);
	}
	
	/*$.mockjax({
		url: '/get/article/login',
		status: 200,
		responseTime:750,
		response:function(rq){
			alert("rq.data:"+rq);
			var data = $.mockJSON.generateFromTemplate({
				"user":[{
					"mock_name":"joe",
					"mock_pwd":"111"
				}]
			});
			this.responseText = data;
		}
	});*/
	var getmock_name;
	var getmock_pwd;
		
	$(document).ajaxStart(function(){
		alert("发起请求...."); 
	});
	$(document).ajaxStop(function(){
		alert("请求完成....");
	});
	$("#submit_login").click(function(){
		var lg_name = $("#username").val();
		var lg_pwd = $("#pwd").val();
		//alert(lg_pwd);
		$.ajax({
			type:"post",
			url: '/get/article/login',
			async:true,
			success: function(result){
				var getUser = JSON.stringify(result.user);
				var Obj_User = JSON.parse(getUser);
				$.each(Obj_User,function(i,item){
					getmock_name = item.mock_name;
					getmock_pwd = item.mock_pwd;
				});
				//alert(typeof(lg_name)+","+mock_pwd);
				alert(getmock_name+","+lg_name);
				if(lg_name == getmock_name && lg_pwd == getmock_pwd){
					alert("登录成功");
				}else{
					alert("登录失败");
				}
			},
			error:function(xhr){
				console.log(xhr);
				alert("sorry！ miss some error");
			}
		});
	});
})()
