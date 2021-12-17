const express=require('express')
const bodyparser=require('body-parser');
const cors=require('cors')
const app=express();
const youtube=require('youtube-search')

app.use(cors())
app.use(bodyparser.json())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("connected")
})
 app.post('/search',(req,res)=>{

    var keyword= req.body.keyword;
    var options = {
        maxResults: 40,
        key:'AIzaSyAFAyN29gr01vgPEjj1YVmEoh5uLE_R3XY'
      };
      youtube(keyword,options,(err,data)=>{
          if (err) res.json(err)
          res.json(data)
      })
      console.log('log')
     
 })
app.listen(4000,()=>{
    console.log('listening to this port');
})