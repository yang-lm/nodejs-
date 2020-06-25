var http=require('http')
var fs=require('fs')
var template=require('art-template')
var url=require('url')

var comments=[{
	
		name:'张三',
		message:'今天天气不错',
		dateTime:'2015-10-16'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2015-10-16'
	},
	{
		name:'张三',
		message:'今天天气不错',
		dateTime:'2015-10-16'
	}
]

http
.createServer(function(req,res){
	var parseObj=url.parse(req.url,true)
	var pathname=parseObj.pathname
	
	if(pathname==='/index'){
		fs.readFile('./index.html',function(err,data){
			if(err){
				return res.end('404 Not Found')
			}
			var set=template.render(data.toString(),{
				comments:comments
			})
			res.end(set)
		})
	}
	if(pathname==='/submit'){
		fs.readFile('./submit.html',function(err,data){
			if(err){
				return res.end('404 Not Found')
			}
			
			res.end(data.toString())
		})
	}
	if(pathname==='/pinglun'){
		// res.end(JSON.stringify(parseObj.query))
	var comment=parseObj.query
	comment.dateTime='2020'
	comments.push(comment)
	res.statusCode=302
	res.setHeader('Location','/index')
	res.end()
	}
	
})
.listen(3000,function(){
	console.log('Running...')
})