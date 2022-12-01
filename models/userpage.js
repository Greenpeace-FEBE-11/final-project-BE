const mongoose = require('mongoose')
const User = require('./user.model')



const {Schema} = mongoose
    const userPageSchema = new Schema ({
       
        
        content: {
            type: String,
            required: true

        },
        alamat :{
            type: String,
            required: true
           
        },
        
        content: {
            type: String,
            required: true

        },
        alamat :{
            type: String,
            required: true
           

        },
        image: {
            type: String,
            
        },

        posttedBy: {

            type: mongoose.Schema.Types.ObjectId,
            ref: User
        },
       

        createdAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        },
    })

    
const userpage = mongoose.model("userpage", userPageSchema)

module.exports = userpage
