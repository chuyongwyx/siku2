	//1.先导入所需要的模块
	var path = require('path'); //通过require将webpack中的path模块导进来
	
	//2. 配置模块导出
	module.exports = {
		entry : "./src/gulpmin/js/public.min.js", //配置入口文件路径 （相对路径）
		output : {
			//配置出口文件路径（绝对路径）
			path : path.resolve(__dirname,'dist/js'), //__dirname : 是nodejs中的命令，获取当前文件所在的绝对路径。
			filename : "public.min.js"
		}
	}