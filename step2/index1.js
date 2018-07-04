const fs = require('fs');

//readFile()函数用于读取文件 'file.md'作为第一个参数 作为要读取的文件
fs.readFile('file.md', (err, data) =>{
	if(err) throw err;
	console.log(data);
});

