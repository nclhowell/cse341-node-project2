//Purpose: return a list of objects [{bike}, {helmet}, {shoes}]
const fooController = require('../controllers/foo');

function userRecommendations(bikePref, helmetPref, shoesPref) {
    let userItems = [];
    let bike = fooController.getBike(bikePref);
    let helmet = fooController.getHelmet(helmetPref);
    let shoes = fooController.getShoes(shoesPref);

    userItems.push(bike);
    userItems.push(helmet);
    userItems.push(shoes);

    return userItems;
}