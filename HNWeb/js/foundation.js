$(function(){
	var locationUrl = window.location.pathname;
	var pagePath = "/page/";
	var newsBackImg = "<img class='bg' src='img/news-back.png'>";
	if(locationUrl.indexOf(pagePath) > 0 ){
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
	});
	$(".nav-menu").find("li").hover(function(){
		$(".nav-menu").find("li").removeClass("nav-li-on");
		$(this).addClass("nav-li-on");
	});
	
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
	
	var index = 0;
	/*var interval = setInterval(function(){
		console.log(index);
		funSlider(index);
	},3000);*/
	function funSlider(index){
		$(".slider").find("img").hide();
		$(".slider-wrap").find(".button span").removeClass("on");
		$(".slider-wrap").find(".button span").eq(index).addClass("on");
		$(".slider").find("img").eq(index).show().siblings().hide();
		/*if(index > 1)index=0;*/
		index++;
	}
	
	$(".team-next").click(function(){
		
		var cur_person = $(".team-detail .per-on");
		if(cur_person.index(".team-detail .person") ==$(".team-detail .person").length){
			
			return;
		}
		cur_person.hide();
		cur_person.next(".person").addClass("per-on");
	});
});
