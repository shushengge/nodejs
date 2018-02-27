/*
	图片读取不同于文本，因为文本读出来可以直接用 console.log() 打印，但图片则需要在浏览器中显示，所以需要先搭建 web 服务，然后把以字节方式读取的图片在浏览器中渲染。

	1、图片读取是以字节的方式
	2、图片在浏览器的渲染因为没有 img 标签，所以需要设置响应头为 image
*/

const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
	let imgContent =fs.readFileSync('yy2.jpg');
	// response.writeHead(200, {'Content-Type': 'img/jpg'});
	response.write(imgContent, "binary");
	// response.write(imgContent);
	response.end();
}).listen(808);



//1、为何图片会在浏览器中居中显示
//2、为什么增加 response.writeHead(200, {'Content-Type': 'img/jpg'}) 会出现下载文件的情况
