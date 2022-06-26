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
    out.detail.i2="Nanded";
}else if(parseInt(in1)===2){
    out.status=true;
    out.detail.i2="Latur";
}else if(parseInt(in1)===3){
    out.status=true;
    out.detail.i2="Pune";
}
res.send(out);
console.log(out);

});
app.listen(3000,()=>{

console.log("On Ho gaya Server");

});