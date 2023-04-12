// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

// Define the connection string which we can get using the Connect button on the cluster in MongoDB Atlas GUI, In production scenarios we'd want to get this string from a key vault like AWS Key Management, but for this demo, we'll hardcode it in our serverless function here.
//const MONGODB_URI = "mongodb+srv://<<mapped username>>:<<mapped password>>@<<cluster>>/<<database>>?retryWrites=true&w=majority";
  
// With AWS IAM the connection string will need the ACCESS KEY, SECRET and the SESSION TOKEN which can be taken from the AWS Lambda environment variables
const access_key = encodeURIComponent(process.env.AWS_ACCESS_KEY_ID);
const secret = encodeURIComponent(process.env.AWS_SECRET_ACCESS_KEY);
const token = encodeURIComponent(process.env.AWS_SESSION_TOKEN);

//Replace the cluster uri and database in the below string
const MONGODB_URI = `mongodb+srv://${access_key}:${secret}@<<cluster>>/<<database>>?authSource=%24external&authMechanism=MONGODB-AWS&retryWrites=true&w=majority&authMechanismProperties=AWS_SESSION_TOKEN:${token}`;

// Once we connect to the database, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);

  // Specify the database we want to use
  const db = await client.db("sample_mflix");

  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {

  /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
  context.callbackWaitsForEmptyEventLoop = false;

  // Get an instance of our database
  const db = await connectToDatabase();

  // Make a MongoDB Query to go into the movies collection and return the first 20 movies.
  const movies = await db.collection("movies").find({}).limit(20).toArray();

  const response = {
    statusCode: 200,
    body: JSON.stringify(movies),
  };

  return response;
  
};