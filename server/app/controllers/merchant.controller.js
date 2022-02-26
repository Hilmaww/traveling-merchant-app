 const db = require("../models/coordinate");
// const Coordinate = db
 const Tutorial = db.tutorials;

dbo = require('../config/con');


// Merchant Post Coordinate

exports.sendCoordinate = (req,res)=> {
  const dbConnect = dbo.getDb();

  const merchant_id = req.body.merchant_id;
  const coordinate = req.body.coordinate; // {"latitude": 37.788, "longitude": -122.432}
  
  const coordinateDocument = {
    merchant_id: merchant_id,
    coordinate: coordinate
  };

  dbConnect
    .collection("travelling-coordinates")
    .insertOne(coordinateDocument, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting coordinate!");
      } else {
        console.log(`Added a new coordinate with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
}




// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });
  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Tutorial.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  // Tutorial.findById(id)
  //   .then(data =>{
  //       if(!data){
  //           res.status(404).send({message: "Not found Tutorial with id " + id})
  //       }
  //       else{
  //           res.send(data)
  //       }
  //   })
  //   .catch(err => {
  //       res
  //         .status(500)
  //         .send({ message: "Error retrieving Tutorial with id=" + id });
  //     });
};
