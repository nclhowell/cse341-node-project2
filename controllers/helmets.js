const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = (req, res) => {
  // #swagger.description = "Return all helmets from collection helmets"
  mongodb
  .getDb()
  .db("project2")
  .collection("helmets")
  .find()
  .toArray((err, lists) => {
    if (err) {
      res.statu(400).json({ message: err });
    }
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(lists);
  });
};

  const getSingle = async (req, res, next) => {
    // #swagger.description = "Return single helmet from collection helmets"
    // Validate helmet ID
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to locate a helmet");
    }
    const helmetId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("project2")
      .collection("helmets")
      .find({
        _id: helmetId,
      });

    result.toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result[0]);
    });
  };

  const createSingle = async (req, res) => {
    // #swagger.description = "Create a single helmet"
    const helmets = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      color: req.body.color,
      gender: req.body.gender,
      surfaceType: req.body.surfaceType,
      terrainType: req.body.terrainType,
      terrainLevel: req.body.terrainLevel,
    };
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("helmets")
      .insertOne(helmets);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(550)
        .json(
          response.error ||
            "Some error occurred while creating the helmet."
        );
    }
  };

  const updateSingle = async (req, res) => {
    // #swagger.description = "Update a single helmet in collection helmets"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to update a helmet");
    }
    const helmetId = new ObjectId(req.params.id);
    const helmets = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      color: req.body.color,
      gender: req.body.gender,
      surfaceType: req.body.surfaceType,
      terrainType: req.body.terrainType,
      terrainLevel: req.body.terrainLevel,
      };
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("helmets")
      .replaceOne({ _id: helmetId }, helmets);
    console.log(response);
    if ((response.modifiedCount = 1)) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Catchall Error Occurred.  Could have been anything!"
        );
    }   
  };

  const deleteSingle = async (req, res) => {
    // #swagger.description = "Delete a single helmet in collection helmets"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to delete a User");
    }
    const helmetId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("helmets")
      .deleteOne({ _id: helmetId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some error occurred while deleting the helmet."
        );
    }   
  };

  module.exports = {
    getAll,
    getSingle,
    createSingle,
    updateSingle,
    deleteSingle,
  };
