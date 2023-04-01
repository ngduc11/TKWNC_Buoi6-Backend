const express = require('express');
const cors = require("cors");
const app = express();
let corsOptions ={
    origin:['http://127.0.0.1:5500','http://localhost:5500']
};
app.use(cors(corsOptions));
const port = 3000;

const dssv = require('./dssv.json');
//dssv rỗng
//const dssv = require('./dssv_rong.json');

app.get('/',(req, res)=>{
    res.send('Xin chào đến với EXPRESS backend !!!');
});

//GET
app.get('/students',(req, res)=>{
    res.send(Object.values(dssv));
});
app.get('/students/:mssv',(req, res)=>{
    // res.send(dssv[req.params.mssv]);
    console.log(req.params.mssv);
    let i = 0;
    for(i = 0; i < dssv.length; i++)
    {
        if(dssv[i].MaSV == req.params.mssv)
        break;
    }
    if(i < dssv.length)
    {
        res.send(dssv[i]);
    }
    else{
        res.send("Not Found !!!");
    }
});

//POST
app.post('/students',(req, res)=>{
    res.send('POST students !!!');
});

//PUT
app.put('/students',(req, res)=>{
    res.send('PUT students !!!');
});

//DELETE
app.delete('/students',(req, res)=>{
    res.send('DELETE students !!!');
});

app.listen(port,()=> console.log(`App is running at port ${port}`))