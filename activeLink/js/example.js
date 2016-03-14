;(function(){
	$("header a").on("click",function(e){
		e.preventDefault(); //阻止事件默认行为
		var href = this.href; //记录要加载页面的链接
		
		//更新当前连接状态
		$("header a").removeClass("current");
		$(this).addClass("current");
		
		var $content = $("#content");
		var $container = $("#container");
		$container.remove();
		$content.load(href + " #container"); //加载页面id = container的内容
		
	});
	
	
	var times; //times用来存储所有活动的环节时间表
	$.ajax({
		type:"get",  //指定get方式
		url:"example.json",
		async:true,
		beforeSend: function(jqXHR){ 
			//在浏览器请求JSON数据之前，脚本会检查浏览器是否支持overrideMineType()方法。
			//该方法会用来告知服务器应当返回JSON数据。
			//当服务器意外配置成返回其他格式的数据时，就可以使用这个方法了
			if(jqXHR.overrideMimeType){
				jqXHR.overrideMimeType("application/json"); 
			}
		}
	});
	
	function loadTimeTable(){//加载example.json文件中加载时间表的数据
		$.getJSON(
			"example.json"
		).done(function(data){ //加载成功，值被保存到times中
			//console.log(data);
			times = data;
		}).fail(function(){ //加载失败
			$("#event").html("Sorry!we could not load the timetable at the moment");
		});
	}
	
	loadTimeTable(); //调用函数
	
	//点击活动名称，将该活动的时间加载到中栏
	$("#content").on("click","#event a",function(e){
		e.preventDefault(); 
		
		var loc = this.id.toUpperCase();  //保存活动位置的名称
		var newContent = ''; //设置展示样式排版
		for(var i = 0; i < times[loc].length; i++){
			//alert(times[loc][i].time);
			newContent += '<li><span class="time">' +times[loc][i].time +'</span>';
			newContent += '<a href="descriptions.html#" title="' +times[loc][i].title.replace(/ /g,'-')+ '">';
			newContent += times[loc][i].title + '</a></li>';
		}
		
		$("#sessions").html('<ul>'+newContent+'</ul>');
		
		$("#event a").removeClass("current"); //更新活动链接的class属性，借此凸显当前活动
		$(this).addClass("current");
		
		$("#details").text(''); //如果第三栏中包含内容，就清空它
	});
	
	
	//点击中栏中的环节是产生相应，它会加载环节的描述信息
	$("#content").on("click","#sessions a",function(e){
		e.preventDefault();
		var fragment = this.href.replace('#',' #');
		//更新当前连接状态
		$("#details a").removeClass("current");
		$(this).addClass("current");
		
		$("#details").load(fragment+this.title); //查找到descriptions.html页面中id对应的部分加载到当前页面
	});
	
})()
