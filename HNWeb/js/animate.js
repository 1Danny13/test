$(function(){
	
	Slider(4,250,-250,false);
});
function Slider(len,left,right,slider_tf){
	var container=document.getElementById("container");//整个轮播容器
	var imgLength = container.getElementsByTagName("a").length;
	//alert(imgLength);
	var slider=document.getElementById("slider");//切换的图片容器
	var has_buttons;//是否有小圆点切换
	if(document.getElementById("button")){
		var has_buttons = true;
		var buttons=document.getElementById("button").getElementsByTagName("span");//小圆点切换按钮
	}else{
		has_buttons = false;
	}
	var pre=document.getElementById("pre");//向左切换按钮
	var next=document.getElementById("next");//向右切换按钮
	var index=1;//记录当前激活小圆点的序号
	var len=len;//实际图片长度
	var left=left;//向左切换的参数
	var right=right;//向右切换的参数
	var interval=3000;
	var timer;
	var animated=false;
	
	//if
	
	pre.onclick=function(){
		if(animated) return;
		animation(left);
		if(index==1){
			index=len;
		}else
			index--;
	}
	next.onclick=function(){
		//alert("444");
		if(animated){
			//alert("444");
			 return;
		}
		if(index==len){
			index=1;
		}else
			index++;
			
		//alert(index);
		animation(right);
	}
	
	function animation(offset){
		if(offset==0){
			return;
		}
		animated=true;
		var left_fp=parseInt(slider.offsetLeft)+offset;
		var time=300;//切换一次的总时间
		var inteval=10;//每隔inteval滑动
		var speed=offset/(time/inteval);//每次滑动
		var go=function(){
			//切换间有效果
			if((speed>0&&parseInt(slider.style.left)<left_fp)||(speed<0&&parseInt(slider.style.left)>left_fp)){
				slider.style.left=parseInt(slider.style.left)+speed+'px';
				setTimeout(go,inteval);
			}
			else{//切换
				slider.style.left=left_fp+'px';
				if(slider.offsetLeft>right){//判断在第一张
					slider.style.left=len*right+'px';
				}
				if(slider.offsetLeft<len*right){//判断在最后一张
					slider.style.left=right+'px';
				}
				animated=false;
			}
		}
		go();
	}
	function play(){
		timer=setTimeout(function(){
			next.onclick();
			play();
		},interval);
	}
	function stop(){
		clearInterval(timer);
	}
	if(slider_tf){
		play();
		container.onmouseenter=stop;
		container.onmouseleave=play;
	}
}