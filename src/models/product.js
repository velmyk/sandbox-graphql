import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qty: Number,
});

export default mongoose.model('Product', ProductSchema, 'products');