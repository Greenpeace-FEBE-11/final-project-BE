const asyncHandler = require('express-async-handler');
const { findById } = require('../models/userprofile');

const Userprofile = require("../models/userprofile");
const userprofile = require('../routes/userprofile');


exports.getUserProfil = async (req, res) =>{
  try {
    const userProfil = await Userprofile.find()
    res.status(200).json({
      message: "success get data",
      data: userProfil
    })
  } catch  {
    res.status(400).json({
      message: "get data failed"
    })
  }
},


exports.getUserProfileById = async (req, res)=> {
  try {
    const userById = await user.findOne({_id: req.params.id})
    res.status(200).json({
      message: "get user detail",
      data: userById
    })
  } catch (error) {
    
  }
}

exports.getDetailUser = async (req, res) =>{
    Userprofile.find({})
    .populate('email.email')
    .exec(function (error, posts) {
        res.send(posts)
    })
}



exports.createprofile = asyncHandler(async(req, res) => {
  const {namaDepan, namaBelakang, email, password, jenisKelamin, nomorTelepon, alamat,user} = req.body
  const userprofile = await Userprofile.create({namaDepan, namaBelakang, email, password, jenisKelamin, nomorTelepon, alamat, user});
  res.status(201).json({
    success: true,
    data: userprofile,
    message: 'Userprofile is created successfully'
  })
})

exports.updateprofileByID = asyncHandler(async(req, res) => {
  try {
    const updateprofile = await Userprofile.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ 
      message: "Userprofile is updated successfully", 
      data: updateprofile 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

exports.deleteProfile = asyncHandler(async(req, res) =>{
  try {
    await Userprofile.findOneAndDelete({_id: req.params.id})
    res.status(200).json({
      message: "delete successfuly"
    })
  } catch  {
    res.status(400).json({
      message: "user not found"
    })
  }
})