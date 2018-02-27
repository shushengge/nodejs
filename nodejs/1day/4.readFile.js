//读取文本 

const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{

	/* 
		一、异步读取
			参数1：文件路径，
			参数2：读取文件后的回调
	*/
	// fs.readFile('read.txt',function(err,data){
	// 	console.log(data);
	// 	if(err){
	// 		return console.error(err);
	// 	}
	// 	// console.log('异步读取：'+data.toString());
	// 	response.end(data);
	// });

	//二、同步读取
	let data = fs.readFileSync('read.txt');
	// response.write('<head><meta charset="utf-8"/></head>')
	response.end(data);
}).listen(808);