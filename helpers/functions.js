//Purpose: return a list of objects [{bike}, {helmet}, {shoes}]
const recommendationsController = require('../controllers/recommendations');

let displayUserRecommendations = async (req, res, next) => {
    // Validate helmet ID
    if (!ObjectId.isValid(req.params.bike)) {
      res.status(400).json("must use a valid bike info");
    }
    if (!ObjectId.isValid(req.params.helmet)) {
        res.status(400).json("must use a valid helmet info");
      }
    if (!ObjectId.isValid(req.params.shoes)) {
        res.status(400).json("must use a valid shoes info");
      }
    let bikeFeedback = new ObjectId(req.params.bike);
    let helmetFeedback = new ObjectId(req.params.helmet);
    let shoesFeedback = new ObjectId(req.params.shoes);
    
    userRecommendations(bikeFeedback, helmetFeedback, shoesFeedback);
    
  };

function userRecommendations(bikePref, helmetPref, shoesPref) {
    let userItems = [];
    let bike = recommendationsController.getBike(bikePref);
    let helmet = recommendationsController.getHelmet(helmetPref);
    let shoes = recommendationsController.getShoes(shoesPref);

    userItems.push(bike);
    userItems.push(helmet);
    userItems.push(shoes);

    return userItems;
}

module.exports = {
    displayUserRecommendations,
  };