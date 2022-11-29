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
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
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
