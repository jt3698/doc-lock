// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifing the region 
// The tutorial's table is 'in us-east-1'
const ddb = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = async (event) => {
    // Handle promise fulfilled/rejected states
    
    await createUser(event.request.userAttributes).then(() => {
      console.log("User creation successful");
    }).catch((err) => {
        console.error(err)
    })
    
    return event;
};

// Function createUser
// Writes message to DynamoDb table Message 
async function createUser(userAttributes) {
    const now = new Date();
    const params = {
        TableName: process.env.UsersTableName,
        Item: {
          'id': userAttributes.sub,
          'email': userAttributes.email,
          'admin': false,
          'createdAt': now.toISOString(),
          'updatedAt': now.toISOString()
        }
    }
    return ddb.put(params).promise();
}