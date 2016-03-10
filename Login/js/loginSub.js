$(function(){ 
	$.mockjax({
			url:"/test"
		});
    var options = {  
    	url:"/test",
        beforeSubmit:  showRequest,  //提交前处理 
        success:       showResponse,  //处理完成 
        resetForm: true,  
        dataType:  'json'  
    };  
  
    $('#my_form').submit(function() {  
        $(this).ajaxSubmit(options);  
    });  
}); 
 
function showRequest(formData, jqForm, options) {  
    var uname = $("#uname").val(); 
    if(uname==""){ 
        $("#msg").html("姓名不能为空！"); 
        return false; 
    } 
     
    var age = $("#age").val(); 
    if(age==""){ 
        $("#msg").html("年龄不能为空！"); 
        return false; 
    } 
    $("#msg").html("正在提交..."); 
     
     
    return true;  
}  
  
function showResponse(responseText, statusText)  {  
    $("#msg").html('提交成功'); 
    var sex = responseText.sex==1?"男":"女"; 
    $("#output").html("姓名："+responseText.uname+" 性别："+sex+" 年龄："+responseText.age); 
}  