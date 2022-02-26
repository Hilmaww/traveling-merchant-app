module.exports = app =>{
    const trvController = require("../controllers/tutorial.controller");
    // const trvController = require("../controllers/traveller.controller");
    var router = require('express').Router()

    router.get('/',(req, res)=>{
        res.send('Hello world')
    })
    
    // Merchan update kordinat
    router.post('/coordinate', trvController.sendCoordinate)
    
    // Costumer cek merchant
    router.get('/merchants', trvController.getMerchant)
    
    //router.get('merchants/:id', trvController.merchant);

    app.use('/v1/api', router);
    


}