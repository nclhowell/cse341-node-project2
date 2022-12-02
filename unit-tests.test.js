/*
  Import Section
*/
const index = require("./routes");
const request = require("supertest");
const express = require("express");

const shoesController = require("./controllers/shoes")

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", index);

/*
  Test Sections 
*/

// Testing to access to /mountainBikes, it is expected to get HTTP 302 because the authentication redirection
test("Testing mountainBikes router", done => {
  request(app)
    .get("/mountainBikes")
    .expect(302, done);
});

// Testing to access to /swagdocs, it is expected to get HTTP 301 because the natural router redirection
test("Testing swagdocs router", done => {
  request(app)
    .get("/swagdocs")
    .expect(301, done);
});

test('Testing shoes controller...', () => {
  expect(shoesController.shoesUnitTest()).toEqual("Shoes controller is working...");
});