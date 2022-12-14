const index = require("./routes");
const request = require("supertest");
const express = require("express");

const shoesController = require("./controllers/shoes");
const bikesController = require("./controllers/mountainBikes");
const helmetsController = require("./controllers/helmets");
const usersController = require("./controllers/Users");
const usersRecomendationController = require("./controllers/recommendations");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", index);

/*
  Test Routers
*/
test("Testing bikes router", done => {
  request(app)
    .get("/mountainBikes")
    .expect(302, done);
});

test("Testing shoes router", done => {
  request(app)
    .get("/shoes")
    .expect(302, done);
});

test("Testing helmets router", done => {
  request(app)
    .get("/helmets")
    .expect(302, done);
});

test("Testing swagdocs router", done => {
  request(app)
    .get("/swagdocs")
    .expect(301, done);
});

/*
  Test Controllers
*/
test('Testing bikes controller...', () => {
  expect(bikesController.bikesUnitTest()).toEqual("Bikes controller is working...");
});

test('Testing shoes controller...', () => {
  expect(shoesController.shoesUnitTest()).toEqual("Shoes controller is working...");
});

test('Testing helmets controller...', () => {
  expect(helmetsController.helmetsUnitTest()).toEqual("Helmets controller is working...");
});

test('Testing users controller...', () => {
  expect(usersController.usersUnitTest()).toEqual("Users controller is working...");
});

test('Testing recomendation users controller...', () => {
  expect(usersRecomendationController.usersRecomendationUnitTest()).toEqual("Recomendation users is working...");
});