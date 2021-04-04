const AWS = require("../config/aws-sdk");
const dynamodb = new AWS.DynamoDB({
  endpoint: new AWS.Endpoint("http://localhost:8000"),
});

module.exports = dynamodb;
