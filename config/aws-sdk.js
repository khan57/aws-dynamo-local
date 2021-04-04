const AWS = require("aws-sdk");

AWS.config.update({
  region: "local",
  accessKeyId: "akid",
  secretAccessKey: "secret",
});

module.exports = AWS;
