const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// const getAll = async (req, res, next) => {
// // #swagger.description = "Return all mountainBikes from collection mountainBikes"
// const result = await mongodb.getDb().db("project2").collection("mountainBikes").find();
// result.toArray().then((lists) => {
// res.setHeader("Content-Type", "application/json");
//    res.status(200).json(lists);
//    });
//  };


const getAll = (req, res) => {
  mongodb
  .getDb()
  .db("project2")
  .collection("mountainBikes")
  .find()
  .toArray((err, lists) => {
    if (err) {
      res.statu(400).json({ message: err });
    }
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(lists);
  });
};

// const getAll = async (req, res, next) => {
//   mongodb
//     .getDb()
//     .db("project2")
//     .collection("mountainbikes")
//     .find()
//     .toArray((err, lists) => {
//       if (err) {
//         res.status(400).json({ message: err });
//       }
//       res.setHeader("Content-Type", "application/json");
//       res.status(200).json(lists);
//     });
//   };

  // const getSingle = async (req, res, next) => {
  //   // #swagger.description = "Return single mountainBike from collection mountainBikes"
  //   const bikeId = new ObjectId(req.params.id);
  //   const result = await mongodb
  //     .getDb()
  //     .db("project2")
  //     .collection("mountainBikes")
  //     .find({
  //       _id: bikeId
  //     });
  //   result.toArray().then((lists) => {
  //     res.setHeader("Content-Type", "application/json");
  //     res.status(200).json(lists[0]);
  //   });
  // };

  const getSingle = async (req, res, next) => {
    // #swagger.description = "Return single mountainBike from collection mountainBikes"
    // Validate Mountain Bike ID
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to locate a Mountain Bike");
    }
    const bikeId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("project2")
      .collection("mountainBikes")
      .find({
        _id: bikeId,
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
    // #swagger.description = "Create a single mountainBike and append to collection mountainBikes"
    const mountainBike = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      discipline: req.body.discipline,
      frontTravel: req.body.frontTravel,
      rearTravel: req.body.rearTravel,
      brakes: req.body.brakes,
      terrainPreference: req.body.terrainPreference,
    };
    console.log(mountainBike);

    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("mountainBikes")
      .insertOne(mountainBike);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(550)
        .json(
          response.error ||
            "Some error occurred while creating the mountainBike."
        );
    }
  };

  const updateSingle = async (req, res) => {
    // #swagger.description = "Update a single mountainBike in collection mountainBikes"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to update a Mountain Bike");
    }
    const bikeId = new ObjectId(req.params.id);
    const mountainBike = {
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      discipline: req.body.discipline,
      frontTravel: req.body.frontTravel,
      rearTravel: req.body.rearTravel,
      brakes: req.body.brakes,
      terrainPreference: req.body.terrainPreference,
    };
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("mountainBikes")
      .replaceOne({ _id: bikeId }, mountainBike);
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
    // #swagger.description = "Delete a single mountainBike in collection mountainBikes"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to delete a Mountain Bike");
    }
    const bikeId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("mountainBikes")
      .deleteOne({ _id: bikeId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some error occurred while deleting the mountainBike."
        );
    }
  };

  function bikesUnitTest() {
    return "Bikes controller is working...";
  }

  module.exports = {
    getAll,
    getSingle,
    createSingle,
    updateSingle,
    deleteSingle,
    bikesUnitTest
  };
