import mongoose, { Schema, models } from "mongoose";

const checkoutSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    country: { type: String },
    address: { type: String },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Checkout = models.Checkout || mongoose.model("Checkout", checkoutSchema);

export default Checkout;
