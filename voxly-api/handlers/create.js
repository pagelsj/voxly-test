'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: 'VoxlyTest',
    Item: {
      id: uuid.v1(),
      mood: data.mood,
      feeling: data.feeling,
      comment: data.comment || null,
      time: timestamp,
    },
  };


  dynamoDb.put(params, (error) => {
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'There was an error adding new insight to the DB. Try again later. ' + error,
      });
      return;
    }
    const response = {
      statusCode: 200,
	    headers: {
	      'Access-Control-Allow-Origin': '*'
	    },
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};