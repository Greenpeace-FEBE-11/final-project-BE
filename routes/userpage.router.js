const express = require('express')
const controller = require("../controllers/userpage.controller")



module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/userpage",  controller.getInformasi)
    app.get("/userpage/:id", controller.getInformasiById)
    app.post("/userpage",  controller.addInformasi)
    app.put("/userpage/:id", controller.updateInformasi)
    app.delete("/userpage/:id",  controller.deleteInformasi)
  
  
    
  };



