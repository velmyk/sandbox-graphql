import Product from "./models/product";

const products = [
  {
    _id: "1",
    name: "Car",
    qty: 17
  },
  {
    _id: "2",
    name: "Rocket",
    qty: 7
  }
];

export const resolvers = {
  Query: {
    hello(root, args, context, info) {
      console.log(context);
      return `${args.name}, Welcome to GraphQL`;
    },
    allProducts() {
      return products;
    },
    async allProductsInMongoDb() {
      return await Product.find();
    },
    async getProduct(_, { id }) {
      return await Product.findById(id);
    }
  },
  Mutation: {
    createProduct(_, { input }) {
      products.push(input);
      return input;
    },
    async createProductInMongoDb(_, { input }) {
      return await Product.create(input);
    },
    async updateProduct(_, { id, input }) {
        return Product.findByIdAndUpdate(id, input);
    },
    async deleteProduct(_, { id }) {
        return Product.deleteOne({ _id: id });
    },
  }
};
