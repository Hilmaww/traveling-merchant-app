module.exports = app =>{
    const tutorials = require("../controllers/tutorial.controller");
    var router = require('express').Router()

    // router.post('coordinate', tutorials.coordinate)
    
    // router.get('merchants', tutorial.merchant)
    
    //router.get('merchants/:id', tutorials.merchant);

    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // app.use('/v1/api', router);
    app.use('/api/tutorials', router);


}