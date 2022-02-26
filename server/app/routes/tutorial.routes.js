module.exports = app =>{
    const merchantController = require("../controllers/merchant.controller");
    const customerController = require("../controllers/customer.controller");
    var router = require('express').Router()

    router.get('/',(req, res)=>{
        res.send('Hello world')
    })
    
    // Merchan update kordinat
    router.post('/coordinate', merchantController.sendCoordinate)
    
    // Costumer cek merchant
    router.get('/merchants', customerController.getMerchantAll)
    
    //router.get('merchants/:id', trvController.merchant);
    router.get('/merchants/:id', customerController.getMerchantById)
    
    app.use('/v1/api', router);
    


}