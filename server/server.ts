import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';

import rootSchema from "./schema";

dotenv.config();

const app = express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
  }));

app.use(cookieParser());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    graphiql: true
}));

app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}`)
}) 