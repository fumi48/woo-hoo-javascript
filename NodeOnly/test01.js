/* 
* 実行
* node index.js before.txt after.txt
*/
'use strict';

const fs = require('fs');
const path = require('path');

if(require.main === module){
    main({argv : process.argv });
}

function main(options){
    var argv = options.argv;
    var input = argv[2];
    var output = argv[3];

    var file = path.join(__dirname, input);

    //ファイルの読み込み
    var buffer = fs.readFileSync(file);
    var text = buffer.toString();

    var result = text.toUpperCase();

    //ファイルの書き込み
    fs.writeFileSync(output, result);
}
