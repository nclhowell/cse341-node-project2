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
  