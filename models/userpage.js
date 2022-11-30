const mongoose = require('mongoose')


const {Schema} = mongoose
    const userPageSchema = new Schema ({
        name: {
            type: String,
           
        },
        title: {
            type: String,
         
        },
        content: {
            type: String,
           

        },
      
        image: {
            type: String,
            
        },

        // comment: [{
        //     text: String,
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }],

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
