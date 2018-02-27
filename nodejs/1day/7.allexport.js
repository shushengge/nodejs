const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request,response)=>{
	let urlObj = url.parse(request.url,true);
	let pathname = urlObj.pathname;

	switch(pathname){
		//显示html结构（要在地址中加上/post）
		case '/post.html':
			let _html1 = fs.readFileSync('post.html');
			response.end(_html1);
			break;
		//去除后缀：html
		case '/post':
			let _html2 = fs.readFileSync('post.html');
			response.end(_html2);
			break;
		//读取照片
		case '/6.'	
		default:
			response.end('request error');
			break;
	}

	// response.end('123');
}).listen(808);