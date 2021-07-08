dev:
	npm run serve

# 打包     首先执行clean脚本  然后执行npm run lib命令
lib:clean
	npm run lib

#清楚打包文件
clean:
	rm -rf dist