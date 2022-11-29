const asyncHandler = require('express-async-handler');

const Userprofile = require("../models/userprofile");
const userprofile = require('../routes/userprofile');

exports.createprofile = asyncHandler(async(req, res) => {
  const {namaDepan, namaBelakang, email, password, jenisKelamin, nomorTelepon, alamat} = req.body
  const userprofile = await Userprofile.create({namaDepan, namaBelakang, email, password, jenisKelamin, nomorTelepon, alamat});
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