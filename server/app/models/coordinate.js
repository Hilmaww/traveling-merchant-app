const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new coordinate schema
const coordinateSchema = new Schema({
  merchant_id: {
    type: Number, 
    required: true
  },
  coordinate: {
    type: Object,
    required: true
  },
});
// export the model
module.exports = mongoose.model('Coordinate', coordinateSchema);