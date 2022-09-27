console.log('Done bro');
// console.log(__dirname)
 
 
// setInterval(()=>{console.log('hey')},1000)
// const func=(name)=>{console.log(`Hello there!! ${name}`)};
// func('Muskan')
// console.log(module);

//  require('./sample');  
 //importing the whole file 
// console.log(data );

// in-built modules
// OS
const os =require('os');
// console.log(os.userInfo())
// console.log(os.uptime())
// const os_data={
//   a:os.type(),
//   b:os.totalmem()
// }
// console.log(os_data)

// Path
const path=require('path')
// console.log(path.sep)
// const filepath=path.join('/ajsjs/','ujjo','abab','jdnjs')
// console.log(filepath)

const http=require('http');
const { flattenDeep } = require('lodash');
// const server=http.createServer((req,res)=>
// {
//   console.log(req)
//   res.end('Hello world gjgjhg!');
// }).listen(2000);


const _=6;
console.log(_);
const i=[1,[3,5,[6,[7]]],[75842786]]
console.log(flattenDeep(i))
