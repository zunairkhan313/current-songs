import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: String },
    code: { type: String },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || mongoose.model("Product", productSchema);

export default Product;
