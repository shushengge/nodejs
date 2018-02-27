//不同于 GET 请求，POST 请求不能通协 url 进行获取，这个时候就需要用到请求体的事件进行监听获取
//加载http模块
const http = require('http');
//加载querystring（参数/查询）模块，作用：把字符串转化成对象(post过来的为字符串)
const querystring = require('querystring');

http.createServer((request,response)=>{
	//定义了一个post变量，用于暂存请求体的信息
	var post = '' ;

	//通过request的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
	request.on('data', (_data)=>{
		post += _data;
	})

	//在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
	request.on('end', ()=>{
		let obj = querystring.parse(post);//把post转成对象
		console.log(obj);
		response.end(post);
	})
}).listen(808);
