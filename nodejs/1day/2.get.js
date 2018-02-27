//当以 GET 请求服务器的时候，服务器可以通过 request.mothod 来判断当前的请求方式并通过 request.url 来获取当前请求的参数。
var http = require('http');
var url = require('url');
//url是一个字符串，需要转换成对象

//url:http://localhost:808/?username=nimei&pwd=1234
http.createServer((request,response)=>{
	//回调函数中的参数--request:请求体；response:响应体  （形参，名字可变）

	//obj:username=nimei&pwd=1234 (若没有后面的query，则为整个url对象)
	var obj = url.parse(request.url,true).query;
	console.log(obj)//{username:'nimei',pwd:'1234'}

	//obj.username：nimei
	var username = obj.username;
	console.log(username);//nimei
	//obj.pwd：1234
	var password = obj.pwd;
	console.log(password);//1234
	if(1==1){
		response.end('yes')
	}else{
		response.end('success')
	}
}).listen(808);