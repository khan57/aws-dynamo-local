const AWS = require("./config/aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({
  endpoint: new AWS.Endpoint("http://localhost:8000"),
});

// docClient.put(
//   {
//     TableName: "td_notes_sdk",
//     Item: {
//       user_id: "bbb",
//       timestamp: 2,
//       title: "My title",
//       content: "My Content",
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// docClient.update(
//   {
//     TableName: "td_notes_sdk",
//     Key: {
//       user_id: "bb",
//       timestamp: 1,
//     },
//     UpdateExpression: "set #t = :t",
//     ExpressionAttributeNames: {
//       "#t": "title",
//     },
//     ExpressionAttributeValues: {
//       ":t": "Updated title",
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// docClient.delete(
//   {
//     TableName: "td_notes_sdk",
//     Key: {
//       user_id: "bb",
//       timestamp: 2,
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// docClient.batchWrite(
//   {
//     RequestItems: {
//       td_notes_sdk: [
//         {
//           DeleteRequest: {
//             Key: {
//               user_id: "bbb",
//               timestamp: 2,
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: "22",
//               timestamp: 22,
//               title: "Title 22",
//               content: "Content 22",
//             },
//           },
//         },
//         {
//           PutRequest: {
//             Item: {
//               user_id: "33",
//               timestamp: 33,
//               title: "Title 33",
//               content: "Content 33",
//             },
//           },
//         },
//       ],
//     },
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );

// docClient.scan(
//   {
//     TableName: "td_notes_sdk",
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(JSON.stringify(data, null, 2));
//     }
//   }
// );
