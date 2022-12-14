const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getRecomendation = (req, res) => {
  // #swagger.description = "Return user recomendation data"
  
  // Getting parameters
  const recomendationParameters = {
    surfaceType: req.params.surfaceType,
    terrainType: req.params.terrainType,
    terrainLevel: req.params.terrainLevel
  };
  
  // To return the recommendations
  let recommendationsArray = [];

  // Query and filter on bikes collection
  mongodb
  .getDb()
  .db("project2")
  .collection("mountainBikes")
  .find({
    terrainLevel: recomendationParameters.terrainLevel,
  })
  .toArray((err, lists) => {
  if (err) {
    console.log("Something was wrong getting helmets!");
    res.statu(400).json({ message: err });
  }
    // Recollecting data
    lists.forEach(e => e.collectionName = "bikes");    
    recommendationsArray = recommendationsArray.concat(lists);       
    console.log(recommendationsArray); 
  });

  // Query and filter on shoes collection
  mongodb
  .getDb()
  .db("project2")
  .collection("shoes")
  .find({
    surfaceType: recomendationParameters.surfaceType,
    terrainType: recomendationParameters.terrainType,
    terrainLevel: recomendationParameters.terrainLevel
  }
  )
  .toArray((err, lists) => {
  if (err) {
    console.log("Something was wrong getting helmets!");
    res.statu(400).json({ message: err });
  }
    // Recollecting data
    lists.forEach(e => e.collectionName = "shoes");
    recommendationsArray = [].concat(lists, recommendationsArray);      
  });

  // Query and filter on helmets collection
  mongodb
  .getDb()
  .db("project2")
  .collection("helmets")
  .find({
    surfaceType: recomendationParameters.surfaceType,
    terrainType: recomendationParameters.terrainType,
    terrainLevel: recomendationParameters.terrainLevel
  }
  )
  .toArray((err, lists) => {
  if (err) {
      console.log("Something was wrong getting helmets!");
      res.statu(400).json({ message: err });      
  }
    // Recollecting data
    lists.forEach(e => e.collectionName = "helmets"); 
    recommendationsArray = [].concat(lists, recommendationsArray);  
    console.log(recommendationsArray);      
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(recommendationsArray);
  });
};

function usersRecomendationUnitTest() {
  return "Recomendation users is working...";
}

module.exports = {
  getRecomendation,
  usersRecomendationUnitTest
};