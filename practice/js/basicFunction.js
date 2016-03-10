;(function(){
	function getSize(width,height,depth){
		var area = width * height;
		var volume = width * height * depth;
		var size = [area, volume];
		return size;
	}
	var areaOne = getSize(3,2,3)[0];
	var volumeOne = getSize(3,2,3)[1];
	
	document.write("areaOne:"+areaOne+"<br />volumeOne:"+volumeOne);
	
	var list1 = document.getElementById("txt1");
	var list2 = document.getElementById("txt2");
	/*var hotel = new Object();
	hotel.name = "park";
	hotel.rooms = 120;
	hotel.booked = 77;
	hotel.checkAvailability = function(){
		return this.rooms - this.booked;
	}
	
	list1.textContent = hotel.name+":"+hotel.checkAvailability();*/
	
	function Hotel(name, rooms, booked){
		this.name = name;
		this.rooms = rooms;
		this.booked = booked;
		
		this.checkAvailability = function(){
			return this.rooms - this.booked;
		}
	}
	 var quyaHotel = new Hotel("Quay", 40, 25);
	 var parkHotel = new Hotel("Park", 120, 77);
	list1.textContent = quyaHotel.name +"    rooms:"+ quyaHotel.checkAvailability();
	list2.textContent = parkHotel.name +"    rooms:"+  parkHotel.checkAvailability();
	
	document.write(document.lastModified);
	document.write("<br />"+window.location);
	document.write("<br />"+document.URL);
	
	/*
	 * Math.round()   将数字四舍五入到离它最近的整数
	 * Math.ceil()  将数字舍入到离它最近并大于它本身的整数
	 * Math.floor()  将数字舍入到离它最近并小于它本身的整数
	 * Math.random()  获取一个从0（包括）到1（不包括）的随机数
	 * */
	var randomNum = Math.floor((Math.random() * 10) + 1);
	document.write("<br />"+randomNum);
	/*如果使用round()替代floor()方法，那么1和10的出现几率约是数字2至9的一半
	 1.5和1.999之间的数字都会被入成2,9和9.5之间的数字会被舍成9。
	 使用floor()方法则能确保随机数的出现几率更为平均。
	 */
	
	var date = new Date();
	var year = date.getFullYear();
	document.write("<br />copyright &copy:"+year);
	
	//添加节点
	var newEl = document.createElement("li");//创建节点
	var newTxt = document.createTextNode("zhangsan");//创建文本
	
	newEl.appendChild(newTxt);//添加文本节点
	var position = document.getElementsByTagName("ol")[0];//选择要添加的节点位置
	position.appendChild(newEl);//添加节点
	//删除节点
	var removeEl = document.getElementsByTagName("ol")[0].getElementsByTagName("li")[0];//获取节点
	var removeElOfP = removeEl.parentNode;//获取节点的父节点
	removeElOfP.removeChild(removeEl);//删除节点
	
	var newEl1 = document.createElement("li");
	var newHotelDate = new Hotel("Huahua",111,22);
	var newDta = document.createTextNode(
		newHotelDate.name+"    rooms:"+ newHotelDate.checkAvailability()
		);
	newEl1.appendChild(newDta);
	var position1 = document.getElementsByTagName("ul")[0];
	position1.appendChild(newEl1);
	
	
})()
