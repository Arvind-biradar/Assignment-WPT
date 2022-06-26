const { Console } = require('console');
let http=require('http');
let url=require('url');

let f=http.createServer((req,res)=>{
   
     
     let x=url.parse(req.url,true).query;   // declaretion to take input... 
     console.log(x.y*5);
     res.write("  Diameter of Circle  "+(x.y)*2);//  y taken as  input from url localhost:999/?y=5
     res.write("  Area of Circle  "+((x.y)*(x.y))*2*3.14);
     res.end();

});
f.listen(999,()=>{

    console.log("Console se paatala cha server iss ready...")
});