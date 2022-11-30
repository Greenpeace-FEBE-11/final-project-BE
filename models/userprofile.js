const mongoose = require('mongoose');

const {Schema} = mongoose

const userProfileSchema = new Schema({
    namaDepan: {
        type: String,
        required: true,
    },
    namaBelakang: {
        type: String,
        required: true,
    },
    email: [{
        
        email: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }
    }],
    
    // password: [{
    //     password: {
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'User'
    //     }
    // }],
    jenisKelamin: {
        type: String,
        required: true,
    },
    nomorTelepon: {
        type: Number,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    }
})

const userprofile = mongoose.model('userprofile', userProfileSchema)

module.exports = userprofile
