const dbo = require('../config/con')

// Costumer Get all merchant info
exports.getMerchantAll = (req, res)=> {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("merchant-profile")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  }

// Costumer Get by id merchant info

exports.getMerchantById = (req, res)=> {
    const dbConnect = dbo.getDb();
    const merchant_id = Number(req.params.id)
    dbConnect
      .collection("merchant-profile")
      .findOne({merchant_id: merchant_id}, (err, result)=>{
          if(err) throw err;
          res.json(result)
      })
      
  }
