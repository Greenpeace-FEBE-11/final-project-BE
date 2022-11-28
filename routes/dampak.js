
const controller = require("../controllers/dampakController")

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
  

    app.post('/dampak',  controller.createDampak)

    app.put('/dampak/:id',  controller.updateDampak)
    app.delete('/dampak/:id',  controller.deleteDampak)
    app.get('/dampak/:id',  controller.getSingleDampak)
    app.get('/dampak', controller.getAllDampaks)
  
    
  };