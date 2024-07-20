let express = require('express')
let app=express()
let router = express.Router();
let Products = require('../Models/product')

router.get('/',(req,res)=>{
    res.send('hey')
})
router.get('/create',async (req,res)=>{
    let userCreate=await Products.create({  //asynchronous
        name:"Eyeliner",
        description:"foreyes",
        cost:"900",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpRWaxNTsXr2J0PdwLQvSIKY7LA0xvKYRapf7JeyCVNFaismY_zVuzwz5zcgAN3SzeRi3lWCvl1H3jHe-HQiQ0e66m6Gs1uTijA0T6BS7WASJ4qAUIKBU_rg",
        countInStock:"60",
        rating:"5",
        numReviews:"5"
    })
    res.send(userCreate)
})

// app.get('/read',async (req,res)=>{
//   let User =await Products.find()  //to read entire data
//  res.send(User)
// })

app.get('/update',async (req,res)=>{
    let updateData = await Products.findOneAndUpdate({name:"eyeliner"},{cost:"1000"},{new:true})
    res.send(updateData)
})

app.get('/read',async (req,res)=>{
    // let User =await userModel.find({name:"Priya"})  //to read one data
    let User =await Products.find()  //to read entire data

    res.send(User)
})

// app.get('/delete',async (req,res)=>{
//     let users = await Products.findOneAndDelete({userName:"sarita"})
//     res.send(users)
// })


module.exports = router
