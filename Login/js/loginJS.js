;(function(){
	var jsonUser = {loginUser:"lg_user",loginPass:"lg_pass"};
	var strUser = JSON.stringify(jsonUser); 
	console.log("jdon strUser:",strUser);
	var value_username=$("#username").val();
	var value_userpwd=$("#userpassword").value;
	var value_useremail=$("#useremail").value;
	//$.post("");
	$("#submit").click(function(){
		$.mockjax({
			url:"/test",
			dataType:"json",
			responseText:{
				result:"hello ?",
				errorCode:0
			}
		});
		$.ajax({
			type:"post",
			url:"/test",
			async:true,
			dataType:"json",
			data:{"name":value_username,"pwd":value_userpwd,"email":value_useremail},
			success:function(data){
				alert(data.result);
				if(data.errorCode==40002){
					$("#errorFeild").text("错误信息");
					alert("错误提示框");
				}if(data.errorCode===0){
					localStorage.setItem("data",JSON.stringify(data.data));
					alert("跳转页面");
				}
			},
			error:function(result){
				alert(result);
			}
		});
	});
})()
