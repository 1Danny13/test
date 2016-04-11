$(function(){
	ajax().post('/addUser',{
		uid:'001',
		uname:'zhangsan',
	}).success(function(){
		if (isOk) {
			
		} else{
			
		}
	}).error(function(){
		
	});
	
	ajax().before(function(xhr){
		xhr.loader = new Loader();
		loader.loading('正在加载数据，请稍后......');
	}).get('/users',{
		pageIndex:3,
		pageSize:10
	}).always(function(status,resText,xhr){
		xhr.loader.close();
		delete xhr.loader;
	});
	
	ajax(options)
	.before(callback(xhr))
	.header(name,value)
	.headers({headers})
	.get|post|other(url,[data],[contentType])
	.success(callback(retData,xhr),[jsonForceValidata=false])
	.error(callback(statusCode,responseText,xhr))
	.always(callback(statusCode,responseText,xhr))
	.timeout(timeout,[callback(xhr)])
});






















