let express=require('express');
let app=express();
let path=(__dirname);
app.use(express.static(path));

app.get('/enter',(req,res)=>{
  
    let in1=req.query.i1;
    let in2=req.query.i2;


let out={status:false,detail:{i1:`${in1}`,i2:''}}
if(parseInt(in1)===1){
    out.status=true;
    out.detail.i2="12000";
}else if(parseInt(in1)===2){
    out.status=true;
    out.detail.i2="34566";
}else if(parseInt(in1)===3){
    out.status=true;
    out.detail.i2="7772";
}
res.send(out);
console.log(out);

});
app.listen(3300,()=>{

console.log("Server");

});