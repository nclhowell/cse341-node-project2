const mongodb = require("../db/connect");

//Purpose is to provide the helpers/functions.js with a bike collection, helmet collection and shoe collection

const getBike = async (req, res, next, bikeInfo) => {
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

  const getHelmet = async (req, res, next, helmetInfo) => {
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

  const getShoes = async (req, res, next, shoeInfo) => {
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