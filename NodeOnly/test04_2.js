/*
* 実行 
* node test04_2
*/

'use strict';

var test04_3 = require('./test04_3');

if(require.main === module){
    main();
}
function main(){
    console.log('1 + 2 = ' + test04_3.add(1, 2));
    console.log('3 - 4 = ' + test04_3.sub(3, 4));
    console.log('5 * 6 = ' + test04_3.mul(5, 6));
    console.log('7 / 8 = ' + test04_3.div(7, 8));
}