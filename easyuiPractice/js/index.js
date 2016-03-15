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
	$("#alink").tooltip({
		content: "<strong>这里是内容提示框</strong>",
//		position: 'top',
//		deltaX:100,
//		deltaY：100,
		showEvent : 'click',
		hideEvent:'dblclick'
		
	});
	
});

/*$.parser.auto = false;
$.parser.onComplete = function(){
	alert('UI组件解析完毕！');
}*/
