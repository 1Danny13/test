;(function(){
	/*$("#opUl").find("li").on('click',function(e){
		if($(this).find('span')){
			$(this).find('span').remove();
		}
		var date = new Date();
		date.setTime(e.timeStamp);
		var clicked = date.toDateString();
		//alert(clicked);
		$(this).append('<span>'+"  "+clicked+"  "+e.type+'</span>');
	});*/
	
	/*var listItem,itemStatus,eventType;
	$("#opUl").on('click mouseover',':not(#l2)',{status:'importante'},function(e){
		listItem = 'Item: ' + e.target.textContent;
		itemStatus = 'Stauts: ' + e.data.status;
		eventType = 'eventType: ' + e.type;
		$('#box').html(listItem+'<br />'+itemStatus+'<br />'+eventType);
		e.stopPropagation();
	});*/
	
	
	var $li = $("#opUl").find("li");
	//特效
	/*$("h2").hide().slideDown();
	$li.hide().each(function(index){
		$(this).delay(700*index).fadeIn(700);
	});
	$li.on('click',function(){
		$(this).fadeOut(700);
	});*/
	
	//css属性动画
	/*$li.on('click',function(){
		$(this).animate({
			opacity:1.0,
			paddingLeft: '+=80'
		},5000,function(){
			$(this).remove();
		});
	});*/
	
	//使用筛选
	setInterval(function(){
		$li.filter('.hot:last').removeClass('hot');
	},1000);
	//$li.filter('.hot:last').removeClass('hot');
	$li.has('em').addClass('complete');
	$li.each(function(){
		if($(this).is('.hot')){
			$(this).prepend('Priority item:');
		}
	});
	//$li.contains('5').append('  (local)');
	$('li:contains("5")').append('    (local)');
	
	
	var $showFormBtn = $("#showFormBtn");
	var $inputBox = $("#inputBox");
	var $newItemForm = $("#newItemForm");
	$showFormBtn.show();
	$newItemForm.hide();
	$showFormBtn.on('click',function(){
		formState = $newItemForm.show();
		$showFormBtn.hide();
	});
	$('input[type=submit]').on('click',function(e){
		e.preventDefault();
		var addToopUl = $inputBox.val();
		//alert(addToopUl);
		$("#opUl").append("<li>"+addToopUl+"</li>");
		$showFormBtn.show();
		$newItemForm.hide(); 
	});
})()




