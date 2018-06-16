import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

mongoose.connect('mongodb://<user>:<password>@ds159400.mlab.com:59400/qraphql-test');

const PORT = 3000;
const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        userId: 1,
    },
}))

app.get('/', (req, res) => res.json({ msg: 'Hello GraphQL' }));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));