let mongoose = require('mongoose')
let productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    cost:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
   brand:{
        type:String,
        require:true
    },
    //  category: 
    //  { 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    //  },
     countInStock: { 
        type: Number, 
        required: true, 
        default: 0 
    },
    rating: 
    { type: Number, 
    default: 0 

    },
    numReviews:
     { type: Number, 
        default: 0 
     },
      
});

   


let product = mongoose.model('User',productSchema)
module.exports=product