//写入文本 
const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
	//覆盖写入	
	//每次写入文本都会覆盖之前的文本内容
	//打开change.txt查看内容是否改变

	//读取文件原来文本
	let data1 = fs.readFileSync('change.txt');
	response.write('<head><meta charset="utf-8"/></head>');//防止文本乱码（一定要写在最前面）  
	response.write(data1);

	//修改文本（覆盖写入）
	let data2 = fs.writeFile('change.txt','"文本写入--覆盖写入（writeFile），原始文件内容为read.txt中的内容"',(err)=>{
		if(err){
			return console.error(err);
		}
		response.write('<head><meta charset="utf-8"/></head>');//防止文本乱码（一定要写在最前面）  
		response.write('<p>数据写入成功</p>');
		response.write('-----------------------------------------------------------------------');
		response.write('<p>读取写入的数据</p>');

		//读取修改后的文本

		//异步
		// fs.readFile('change.txt',(err,data)=>{
		// 	if(err){
		// 		return console.error(err);
		// 	};
		// 	// response.write(data);
		// 	response.write(data);//此行代码的位置要注意
		// });

		//同步
		let data3 = fs.readFileSync('change.txt');
			response.write(data3);



		//插入文本
		let data4 = fs.appendFile('change.txt','---妙语连珠是猎物，支支吾吾是喜欢（我是插入的部分）---',(err)=>{
			if(err){
				return console.error(err);
			}
			response.write('<p>-----------------------------------------------------------------------</p>');
			response.write('<p>插入成功，请看最新的文本内容</p>');
			//读取最新文本内容

			let data5 = fs.readFileSync('change.txt');
			response.end(data5);
		});
	});
}).listen(808);

