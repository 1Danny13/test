$(function(){
	//导航栏效果
	$(".nav-menu").find("li").hover(function(){
		$(".nav-menu").find("li").removeClass("nav-li-on");
		$(this).addClass("nav-li-on");
	});
	
	//设置新闻部分的背景图，子页和首页
	var locationUrl = window.location.pathname; 
	var pagePath = "/page/";
	var newsBackImg = "<img class='bg' src='img/news-back.png'>"; //在首页
	if(locationUrl.indexOf(pagePath) > 0 ){//如果是在子页面中
		newsBackImg = "<img class='bg' src='../img/news-back.png'>";
	}
	var induAnalBackImg = "<img class='iabg' src='img/our-team.png'>";
	$(".news-on").prepend(newsBackImg);
	$(".our-team").prepend(induAnalBackImg);
	$(".news").find("li").hover(function(){
		$(".news").find("li").removeClass("news-on");
		$(this).addClass("news-on");
		$('.bg').remove();
		$(this).prepend(newsBackImg);
	},function(){
		$(".news").find("li").removeClass("news-on");
		$('.bg').remove();
	});
	
	//合作商页面的效果
	var imgSrc ;
	$(".prod-sec-img").find("img").hover(function(){
		imgSrc = $(this).attr("src");
		var imgSplit = imgSrc.split("\/")[2];
		var newImgSrc = imgSplit.substring(0,2);
		$(this).attr("src","../img/"+newImgSrc+".png");
	},function(){
		$(this).attr("src",imgSrc);
	});
	
	$(".slider").find("img").eq(1).hide();
	$(".slider-wrap").find(".button span").hover(function(){
		var index = $(this).index();
		$(".slider").find("img").hide();
		$(".slider-wrap").find(".button span").removeClass("on");
		$(this).addClass("on");
		$(".slider").find("img").eq(index).show().siblings().hide();
	});
	
	
	
	/*大图轮播和团队介绍*/
	var flag = false;
	var docWid ;
	//if(docWid != $(document).width()){alert();}
	var container = $(".container");
	var slider = $(".slider");
	/*adjust();
	$(window).on("resize",adjust);
	function adjust(){
		stop();
		docWid = $(document).width();
		container.css({"width":docWid,"height":parseInt(docWid)*0.44 + "px","max-height":"620px"});
		slider.css({"width":4 * docWid,"left":-docWid});
		slider.find("img").css({"width":docWid});
		play();
		//flag = true;
	}*/
	if(!flag){
		//alert(parseInt(docWid)*0.44);
		docWid = $(document).width();
		container.css({"width":docWid,"height":parseInt(docWid)*0.44 + "px","max-height":"620px"});
		slider.css({"width":4 * docWid,"left":-docWid});
		slider.find("img").css({"width":docWid});
		flag = true;
	}
	var buttons = $(".buttons span");
	var len = 2;
	var index = 0;
	var left = docWid;
	var right = -docWid;
	var time ;
	var interval = 5000;
	var animated = false;
	var timer
	function animation(len,left,right,offset,slider){
		if(slider.is($(".slider"))){
			if(offset == 0){
				return;
			}
		}
				
		animated = true;
		var left_fp = parseInt(slider.css("left")) + offset;
		var time=300;//切换一次的总时间
		var inteval=5;//每隔inteval滑动
		var speed=offset/(time/inteval);//每次滑动
		function go(){
			//切换间有效果
			if((speed>0&&parseInt(slider.css("left"))<left_fp)||(speed<0&&parseInt(slider.css("left"))>left_fp)){
				
				slider.css("left",parseInt(slider.css("left"))+speed+'px');
				setTimeout(go,inteval);
			}
			else{//切换
				slider.css("left" , left_fp + "px");
				if(parseInt(slider.css("left")) > right){
					slider.css("left" ,  len*right + "px");
				}
				if(parseInt(slider.css("left")) < len*right){
					slider.css("left" , right + "px");
				}
				animated = false;
			}
		}
		go();
	}
	
	function showButton(){
		buttons.removeClass();
		buttons.eq(index).addClass("on");
	}
	
	buttons.each(function(ind){
		$(this).on("mouseover",function(){
			if(animated){
				 return;
			}
			if($(this).hasClass("on")){
				return;
			}
			animation(len,left,right,(ind - index)*right,slider);
			index = ind;
			showButton();
		})
	});
	
	function play(){
		timer = setTimeout(function(){
			if(animated) return;
			animation(len,left,right,left,slider);
			if(index==0){
				index=1;
			}else
				index--;
			showButton();
			play();
		},interval);
	}
	function stop(){
		clearInterval(timer);
	}
	play();
	
	$(".container").hover(function(){
		stop();
	},function(){
		play();
	});
	
	$(".team-next").on("click",function(){
			animation(7,572,-572,-572,$(".slider1"));
		});
	$(".team-pre").on("click",function(){
		animation(7,572,-572,572,$(".slider1"));
	});
	
});
