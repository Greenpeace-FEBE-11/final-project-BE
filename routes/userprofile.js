const express = require('express')
const { authJwt } = require("../middlewares");
const controller = require("../controllers/userprofile")

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post('/userprofile', [authJwt.verifyToken, authJwt.isUser], controller.createprofile)

    app.put('/userprofile/:id', [authJwt.verifyToken, authJwt.isUser], controller.updateprofileByID)
    app.get('/userprofile', [authJwt.verifyToken, authJwt.isUser], controller.getUserProfil)
    app.get('/userprofile/:id', [authJwt.verifyToken, authJwt.isUser], controller.getUserProfileById)
    app.delete('/userprofile/:id', [authJwt.verifyToken, authJwt.isUser], controller.deleteProfile)
   
  };