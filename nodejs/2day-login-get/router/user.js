//匹配（接收前端数据--username等、查找、对比并做出判断）
module.exports = {
	register:(app)=>{
		app.get('/login',(request,response)=>{
			let sql = `select * from user where username = ${request.query.username} and pwd = ${request.query.pwd}`;
			//。。。操作数据库（此处省略了一些步骤）

			//操作数据库后得到result(此处规定username为shusheng。。。若是输入的username不一致，则直接返回status：false)
			let result = request.query.username == 'shusheng' && request.query.pwd == 'shusheng' ;

			if(result){
				//response.send（）类似于response end();
				// response.send（）里面可以直接send对象
				response.send({statue:true,message:'登录成功'})
			}else{
				response.send({
					statue:false,
					message:'登录信息不存在'
				})
			}
			
		})
	}
}