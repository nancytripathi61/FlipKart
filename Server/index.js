let express = require('express')
let mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/flipkartProject').then(()=>{
    console.log("db----");
}).catch((err)=>{
  console.log(err);
})
let Signup = require('./routes/signup')
let login = require('./routes/login')
let product = require('./routes/product')

let app = express()
let cors=require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send("helooo")
})

app.use('/api',Signup)
app.use('/api',login)
app.use('/api',product)

app.listen(5000,()=>{
    console.log("server is running at port no.");
})