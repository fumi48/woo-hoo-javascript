/*
* 実行 
* node test02 http://www.google.com/
*/
'use strict';

const url = require('url');
const http = require('http');

if(require.main === module){
    main({ argv : process.argv });
}

function main(options){
    var argv = options.argv;
    var href = argv[2];
    var target = url.parse(href);   //url解析

    var req = http.request(target, res => {
        res.on('data', data => {
            console.log('data', data.toString());
        });
        res.on('end', () => {
            console.log('end');
        });
    });

    req.end();

}