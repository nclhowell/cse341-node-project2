//Purpose: return a list of objects [{bike}, {helmet}, {shoes}]
const recommendationsController = require('../controllers/recommendations');

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
    userRecommendations,
  };