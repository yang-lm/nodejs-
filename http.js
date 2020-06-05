var http=require('http')
var fs=require('fs')
var server=http.createServer()

//侦听request请求
 server.on('request',function(req,res){
	var url=req.url
	
	if(url==="/login"){
		res.setHeader('Content-Type','text/plain;charset=utf-8')
		res.end('Hello 转码') 
	}
	
	else if(url==="/hello") {
		res.setHeader('Content-Type','text/html;charset=utf-8')
		res.end('<p>Hello</p>') 
	}
	else {
		fs.readFile('./resource/index.html',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				res.end('文件读取失败，请稍后重试！')
			}
			else{
				res.setHeader('Content-Type','text/html;charset=utf-8')
				res.end(data.toString())
			}
		})
		
	}
 })
 
 //注册端口
 server.listen(3000,function(){
	 console.log('Server is running...')
 })