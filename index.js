import { GraphQLServer, } from 'graphql-yoga';
import dotenv from 'dotenv';
import connectdb from './db';
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation';
import Event from './resolvers/Event';
import Booking from './resolvers/Booking';
import User from './resolvers/User'

dotenv.config({ path: "./config/config.env" });

connectdb();
const resolvers = {
    Query,
    Mutation,
    Event,
    Booking,
    User
};
const options = {
    port: 5000,
    playground: "/playground"
}
const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers
});

server.start(options, ({ port }) => {


    console.log(`Server has started on  ${port}`);
})