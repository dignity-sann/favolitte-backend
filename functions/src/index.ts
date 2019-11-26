import * as functions from 'firebase-functions';
// import * as twitter from 'twitter';
import * as dotenv from 'dotenv';
import * as corsLib from 'cors';

const cors = corsLib();
// Load .env variable
dotenv.config();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    response.send("Hello from Firebase!");
  })
});
