import express from "express";
import { graphqlHTTP } from "express-graphql";
import 'dotenv/config'
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDb } from './config/db.js'

import graphqlSchema from './schema/index.js';
import graphqlResolver from './resolvers/index.js';

//Create an express server and GraphQL endpoint
const app = express();

connectDb();
app.use(cors());

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

//Listening to our server
app.listen(5000, () => {
  console.log("GraphQL server with Express running on localhost:5000/graphql");
});
