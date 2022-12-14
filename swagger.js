const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Mountain Bikes API",
    description: "Description",
  },
  host: "final-project-team-supreme.onrender.com",
  schemes: ["http","https"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);