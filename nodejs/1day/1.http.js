/*
	http 模块
	1、加载模块
    2、调用 http.createServer() 方法创建服务，方法接受一个回调函数，回调函数中有两个参数，第一个是请求体，第二个是响应体。
    3、在回调函数中一定要使用 response.end() 方法，用于结束当前请求，不然当前请求会一直处在等待的状态。
    4、调用 listen 监听一个端口。
*/
var http = require('http');
//创建服务
http.createServer(function(request,response){
	response.write('ok');
	response.end('123');
}).listen(808);