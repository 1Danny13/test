$(function(){
/*******CP1:
 * $.fn.draggable.defaults.cursor = "pointer";
	//$('#box').dialog();
	//$.parser.parse();
	$("#box").draggable({
		
		//revert:true,
//		proxy: "clone",
//		proxy: function(source){
//			var p = $('<div style="width:400px;height:200px;border:1px solid royalblue"></div>');
//			p.html($(source).html()).appendTo('body');
//			return p;
//		},
//		onBeforeDrag: function(e){
//			alert("拖动前触发");
//		},
//		onStartDrag: function(e){
//			//alert("拖动开始时触发");
//			console.log($('#box').draggable('proxy'));
//		},
//		onDrag: function(e){
//			alert("拖动过程触发");
//		},
//		onStopDrag: function(e){
//			alert("拖动停止时触发");
//		},
	});
	
//	$("#box").draggable('disable');
//	$("#box").draggable('enable');
//	console.log($('#box').draggable());
*/

//***********CP2:
/*$("#dd").droppable({
	accept: '#box',
	onDragEnter: function(e,source){//只触发一次
		console.log(source);
		$(this).css('background','#95B8E7');
		$(this).text('onDragEnter');
	},
	onDragOver: function(e,source){//拖动中不停触发
		console.log(source);
		$(this).css('background','coral');
		$(this).text('onDragOver');
	},
	onDragLeave: function(e,source){
		console.log(source);
		$(this).css('background','lightgoldenrodyellow');
		$(this).text('onDragLeave');
	},
	onDrop: function(e,source){//是放入到放置区，松开鼠标左键，丢下的操作
		console.log(source);
		$(this).css('background','red');
		$(this).text('onDrog');
	}
	//
});
$("#box").draggable();*/


//***********CP3:
/*//$.fn.resizable.default.disabled = true;
$("#box").resizable({
		//disableed: true,
		//handles: 'e',
	//	minWidth: 200,
	//	minHeight: 200,
	//	maxWidth: 600,
	//	maxHeight: 400,
	//	edge: 50,
		onStartResize: function(e){
			console.log('开始改变大小时！');
		},
		onResize: function(e){
			console.log('调整大小时触发！');
			return false;
		},
		onStopResize: function(e){
			console.log('停止调整大小时触发！');
		},
	});
	console.log($('#box').resizable('options'));
	$("#box").resizable('disable');
	$("#box").resizable('enable');
	*/
	
//***********CP4:
/*	$("#alink").tooltip({
		content: "<strong>这里是内容提示框！</strong>",
//		position: 'top',
//		deltaX:100,
//		deltaY：100,
//		showEvent : 'click',
//		hideEvent:'dblclick'
//		showDelay: 500,
//		hideDelay: 500,
//		onShow :function(e){
//			alert("显示提示框的触发");
//		},
//		onHide: function(e){
//			alert("隐藏提示框的触发");
//		},
		onPosition: function(left,top){
			console.log('left:'+left+',top:'+top);
		},
//		onUpdate: function(content){
//			alert('内容更新为：'+content);
//		},
//		onDestroy: function(e){
//			alert("提示框被销毁的时候触发！");
//		},
//		onShow: function(e){//返回tip元素对象
//			//console.log($("#alink").tooltip('tip'));
//			$('.tooltip-bottom').css('left',500);
//		},
//		onHide: function(e){
//			$("#alink").toolti p('reposition');
		
	});
	//返回属性对象
	console.log($("#alink").tooltip('options'));
	
	//显示提示框
	//$("#alink").tooltip('show');
	
	//隐藏提示框
	//$("#alink").tooltip('hide');
	
	//更新content内容
	//$("#alink").tooltip('upDate','更新提示内容');
	
	$("#alink").click(function(){
		//销毁提示框
		$(this).tooltip('destroy');
		
	});
	*/
	
	
	//***********CP8:
/*	$('#box').progressbar({
		width: 400,
		height: 20,
		value: 10,
		text: '{value}%',
		onChange: function(newValue,oldValue){
			console.log("新："+newValue+",旧："+oldValue);
		},
	});
	
//	setTimeout(function(){
//		$('#box').progressbar('setValue',70);
//	},1000);
//	
//	setInterval(function(){
//		$('#box').progressbar('setValue',$('#box').progressbar('getValue')+1);
//	},200);

	console.log($('#box').progressbar('options'));
	*/
	
	
	
	//***********CP8:
	$('#box').panel({
		width:400,
		height: 150,
		title: '面板',
		closable: true,
		iconCls: 'icon-edit',
		left: 100,
		top:50,
		cls: 'a',
		headerCls:'b',
		bodyCls:'c',
		style:{
			'min-height': '100px'
		}
	});
	
});

/*$.parser.auto = false;
$.parser.onComplete = function(){
	alert('UI组件解析完毕！');
}*/
