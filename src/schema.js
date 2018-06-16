import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Product {
        _id: ID
        name: String!
        qty: Int
    }
    type Query {
        hello(name: String!): String!
        allProducts: [Product]
        allProductsInMongoDb: [Product]
        getProduct(id: ID): Product
    }

    input ProductInput {
        name: String!
        qty: Int
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        createProductInMongoDb(input: ProductInput): Product
        updateProduct(id: ID!, input: ProductInput): Product
        deleteProduct(id: ID!): Product
    }
`;

export default makeExecutableSchema({ typeDefs, resolvers });