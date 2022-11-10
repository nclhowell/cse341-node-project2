const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "mountainBikes API",
    description: "Description",
  },
  host: "localhost:3000",
  schemes: ["http","https"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);