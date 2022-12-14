const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllUser = (req, res) => {
  mongodb
  .getDb()
  .db("project2")
  .collection("userData")
  .find()
  .toArray((err, lists) => {
    if (err) {
      res.statu(400).json({ message: err });
    }
       res.setHeader("Content-Type", "application/json");
       res.status(200).json(lists);
  });
};

 const getSingleUser = async (req, res, next) => {
    // #swagger.description = "Return single User from collection Users"
    // Validate User ID
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to locate a User");
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("project2")
      .collection("userData")
      .find({
        _id: userId,
      });

    result.toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result[0]);
    });
  };

  const createSingleUser = async (req, res) => {
    // #swagger.description = "Create a single User and append to collection Users"
    const newUser = {
      given_name: req.body.given_name,
      family_name: req.body.family_name,
      nickname: req.body.nickname,
      name: req.body.name,
      email: req.body.email
    };
    console.log(newUser);

    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("userData")
      .insertOne(newUser);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(550)
        .json(
          response.error ||
            "Some error occurred while creating the new user."
        );
    }
  };

  const updateSingleUser = async (req, res) => {
    // #swagger.description = "Update a single User in collection Users"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to update a Mountain Bike");
    }
    const userId = new ObjectId(req.params.id);
    const newUser = {
        given_name: req.body.given_name,
        family_name: req.body.family_name,
        nickname: req.body.nickname,
        name: req.body.name,
        email: req.body.email
      };
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("userData")
      .replaceOne({ _id: userId }, newUser);
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

  const deleteSingleUser = async (req, res) => {
    // #swagger.description = "Delete a single User in collection Users"
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("must use a valid Mongo object ID to delete a User");
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db("project2")
      .collection("userData")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "Some error occurred while deleting the user."
        );
    }
  };

  function usersUnitTest() {
    return "Users controller is working...";
  }

  module.exports = {
    getAllUser,
    getSingleUser,
    createSingleUser,
    updateSingleUser,
    deleteSingleUser,
    usersUnitTest
  };
