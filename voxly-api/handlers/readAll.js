'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: 'VoxlyTest'
};

module.exports.readAll = (event, context, callback) => {
  
  dynamoDb.scan(params, (error, result) => {

    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch all the Insights, please try again later.',
      });
      return;
    }

    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};