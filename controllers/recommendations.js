const mongodb = require("../db/connect");

//Purpose is to provide the helpers/functions.js with a bike collection, helmet collection and shoe collection

function getBike(bikeInfo) {
    const bikeCollection = async (req, res, next) => {
        const result = await mongodb
          .getDb()
          .db("project2")
          .collection("mountainBikes")
          .find({"terrainLevel": bikeInfo,});
        result.toArray((err, result) => {
          if (err) {
            res.status(400).json({ message: err });
          }
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(result[0]);
        });
      };
    return bikeCollection;
}

function getHelmet(helmetInfo){
    const helmetCollection = async (req, res, next) => {
        const result = await mongodb
          .getDb()
          .db("project2")
          .collection("helmets")
          .find({"terrainLevel": helmetInfo,});
        result.toArray((err, result) => {
          if (err) {
            res.status(400).json({ message: err });
          }
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(result[0]);
        });
      };
    return helmetCollection;
}

function getShoes(shoeInfo){
    const shoesCollection = async (req, res, next) => {
        const result = await mongodb
          .getDb()
          .db("project2")
          .collection("shoes")
          .find({"terrainLevel": shoeInfo,});
        result.toArray((err, result) => {
          if (err) {
            res.status(400).json({ message: err });
          }
          res.setHeader("Content-Type", "application/json");
          res.status(200).json(result[0]);
        });
      };
    return shoesCollection
}

const foo = async (req, res, next) => {
  // #swagger.description = "foo"
  // foo
  let userItems = [];
  
  if (!ObjectId.isValid(req.params.bike)) {
    res.status(400).json("must use a valid bike info");
  }
  if (!ObjectId.isValid(req.params.helmet)) {
      res.status(400).json("must use a valid helmet info");
    }
  if (!ObjectId.isValid(req.params.shoes)) {
      res.status(400).json("must use a valid shoes info");
    }
  //getting bike,helmet,shoe from user input
  let bikeFeedback = new ObjectId(req.params.bike);
  let helmetFeedback = new ObjectId(req.params.helmet);
  let shoesFeedback = new ObjectId(req.params.shoes);
  
  //retrieving bike,helmet,shoes collection
  let bike = getShoes(bikeFeedback);
  let helmet = getShoes(helmetFeedback);
  let shoes = getShoes(shoesFeedback);
   
  userItems.push(bike);
  userItems.push(helmet);
  userItems.push(shoes);
  
  return userItems;
};

module.exports = {
  getBike,
  getHelmet,
  getShoes,
  foo,
};
