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
	/*$('#box').panel({
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
	});*/
	
	//***********CP14:
	/*$("#box").layout({
		//fit: true,
	});
	//$("#box").layout('collapse','north');
	$("#box").layout('add',{
		title: 'south',
		region: 'south',
		height:100
	});
	$(document).click(function(){
		$("#box").layout().css('display','block');
		$("#box").layout('resize');
	});
	console.log($("#box").layout("options"));*/
	
	//***********CP15:
	/*$('#box').window({
		title : '窗口',
		width :500,
		height : 250,
//		collapsible : false,
//		minimizable : false,
//		maximizable : false,
//		closable : false,
//		closed : true,
//		zIndex : 9999,
//		draggable : false,
//		resizable : false,
//		shadow : true,
//		modal : true,//在窗口后面加幕布
		inline : true,
//		fit : true,
		iconCls : 'icon-edit',
		
	});
	
	$(document).click(function(){
		$("#box").window('move',{
			left : 0,
			top : 0
		});
	});
	$(document).dblclick(function(){
		$("#box").window('vcenter');
	});*/
	
	//***********CP16:
	/*$("#box").dialog({
		title : "JQ对话框",
		content: 'welcome！',
//		collapsible : true,
//		minimizable : true,
//		maximizable : true,
//		resizable : true,
		toolbar : [{
			text : '编辑',
			iconCls : 'icon-edit',
			plain: false, //扁平化
			handler : function(){
				alert('编辑');
			}
		},{
			text : '保存',
			iconCls : 'icon-save',
			handler : function(){
				alert('保存');
			}
		}],
		buttons : [{
			text : '编辑',
			iconCls : 'icon-edit',
			plain: true,
			handler : function(){
				alert('编辑');
			}
		},{
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function(){
				alert('取消');
			}
		}]
	});
	console.log($('#box').dialog('dialog'));*/
	
	//***********CP17:
/*	$.messager.defaults = {
		ok : '是',
		cancel : '取消',
		width:400,
		height:300
	}
	
//	显示警告窗口。参数：
//	$.messager.alert('警告框','这是一个信息框','info',function(){
//		alert('确认后的回调！');
//	});
//	title：在头部面板显示的标题文本。
//	msg：显示的消息文本。
//	icon：显示的图标图像。可用值有：error,question,info,warning。
//	fn: 在窗口关闭的时候触发该回调函数。
	
	
	//使用确认框，三个参数均可选
//	$.messager.confirm('确认对话框','你真的要删除吗?',function(flag){
//		if(flag){
//			alert("删除成功！");
//		}
//	});
//	显示一个包含“确定”和“取消”按钮的确认消息窗口。参数：
//	title：在头部面板显示的标题文本。
//	msg：显示的消息文本。
//	fn(b): 当用户点击“确定”按钮的时侯将传递一个 true 值给回调函数，否则传递一个false 值。

	//使用提示框，三个参数均可选
//	$.messager.prompt('提示信息','请输入你的名字：',function(flag){
//		if(flag){
//			alert(flag);
//		}
//	});
//	显示一个用户可以输入文本的并且带“确定”和“取消”按钮的消息窗体。参数：
//	title：在头部面板显示的标题文本。
//	msg：显示的消息文本。
//	n(val): 在用户输入一个值参数的时候执行的回调函数。

	//进度条信息
	$.messager.progress({
		title : '执行中',
		msg : '努力加载中...',
		text : '{value}%',
		interval : 100,
		modal: true
	});
//	显示一个进度消息窗体。
//	属性定义为：
//	title：在头部面板显示的标题文本。默认：空。
//	msg：显示的消息文本。默认：空。
//	text：在进度条上显示的文本。默认：undefined。
//	interval：每次进度更新的间隔时间。默认：1000 毫秒。

	console.log($.messager.progress('bar'));
	setTimeout(function(){
		$.messager.progress('close');
	},3000);
	
	$.messager.show({
		title : '我的消息',
		msg : '消息在5秒后关闭',
		showSpeed : 1000,
		showType : 'slide',
		style : {
			top : 30,
			left : 50
		},
		timeout : 5000,
	});*/
	
	//***********CP18:
	/*$(document).on('contextmenu',function(e){
		e.preventDefault();
		$('#box').menu('show',{
			top : e.pageY,
			left : e.pageX,
		});
		//添加菜单项
//		$('#box').menu('appendItem',{
//			id : 'new',
//			parent : $('#box').menu('findItem','打开').target,
//			text : '添加',
//			iconCls : 'icon-add',
//			onclick : function(){
//				alert('新增');
//			}
//		});
		
		//设置某个菜单项图标
		$('#box').menu('setIcon',{
			target : '#box-save',
			iconCls : 'icon-save'
		});
		$('#box').menu('removeItem','#box-save');
		//$('#box').menu('disableItem','#box-save');
	});
	//console.log($('#box').menu('findItem','保存').id);*/
	
	//***********CP19:
	/*$('#edit').menubutton({
		plain : true,
		menu : "#menu",
		duration : 500,
		iconCls : 'icon-edit',
	});
	console.log($('#edit').menubutton('options'));
//	$('#edit').menubutton('disable');
//	$('#edit').menubutton('destroy');
	$.fn.menubutton.defaults.cursor = "pointer";*/
	
	
	//***********CP20:
	/*$('#edit').splitbutton({
		menu : '#menu',
		iconCls : 'icon-edit',
		plain : true,
	});*/
	
	
	//***********CP21:
	/*$('#box').pagination({
		total : 2000,
		pageSize : 10,
		pageNumber : 3
	});*/
	
	
	//***********CP22:
	/*$('#ss').searchbox({
		searcher: function(value,name){
			alert(value+','+name);
		},
		menu : '#box',
		prompt: '请输入内容',
		width: 200,
		height : 30,
		disabled : false,
	});
	console.log($('#ss').searchbox('options'));
	console.log($('#ss').searchbox('textbox'));
	console.log($('#ss').searchbox('getValue'));
	console.log($('#ss').searchbox('getName'));
	
//	$('#ss').searchbox('destroy');
//	$('#ss').searchbox('clear');
	$('#ss').searchbox('resize',500);
	$(document).dblclick(function(){
		$('#ss').searchbox('reset');
	});
	
	var m = $('#ss').searchbox('menu');
	var item = m.menu('findItem','体育');
	m.menu('setIcon',{
		target : item.target,
		iconCls : 'icon-save'
	});*/
	
	
	//***********CP23:
//	$('#email').validatebox({
//		required : true,
//		validType : 'email',
//		delay : 2000,
//		missingMessage : '请按正确的方式填写',
//		invalidMessage : '无效时',
//		tipPosition : 'left',
//		deltaX : 120,
//		novalidate : true,
//	});
//	
//	console.log($('#email').validatebox('validate'));
//	console.log($('#email').validatebox('isValid'));
	
	$.extend($.fn.validatebox.defaults.rules,{
		minLength: {
			validator : function(value,param){
				return value.length >= param[0];
			},
			message : '请输入长度不小于{0}的字符',
		}
	});
	
	//调用
	$("#email").validatebox({
		required : true,
		validType : 'minLength[5]',
	});
});

/*$.parser.auto = false;
$.parser.onComplete = function(){
	alert('UI组件解析完毕！');
}*/
