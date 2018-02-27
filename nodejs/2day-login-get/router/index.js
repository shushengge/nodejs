
//express模块
const express = require('express');
const app = express();

//路径模块
const path = require('path');

//把user.js模块引进来
const user = require('./user');

module.exports = {
	start:(_port) =>{
		//访问静态资源
		//path.resolve(__dirname,'../')=>当前路径返回上一层
		//path.join(path.resolve(__dirname,'../'),'./')解决同域下所有资源的访问
		app.use(express.static(path.join(path.resolve(__dirname,'../'),'./')));


		//Express -- 跨域支持
		app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
              res.send(200);/*让options请求快速返回*/
            } else{
              next();
            }
        });


		//把app传大到user.js
		user.register(app);

		//开启（创建）服务，类似于http服务
		app.get('/login',(request,response)=>{
			response.send('get root');
		})

		app.listen(_port,()=>{
			console.log(`running on http://localhost:${_port}`);
		})
	}
}