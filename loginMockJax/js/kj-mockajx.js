;(function(){
	var config = [{
		url: '/get/article/list',
		//code: 200,
		status:1202,
		responseText: {
			value: [/*{
				"responseCode":1203
			}*/]
		},
		response: function(rq){
			console.log("rq.data:"+rq.data);
			for(var i = 0;i < 25;i++){
				this.responseText.value.push({
					id: i+1,
					title:'test jquery mockajx' + i,
					author: 'kj.me',
					link: 'www.baidu.com',
					dateTime: new Date().getTime()
				});
			}
		}
	}];
	for(var i = 0;i < config.length;i++){
		//alert(config.length);
		$.mockjax(config[i]);
	}
})()
