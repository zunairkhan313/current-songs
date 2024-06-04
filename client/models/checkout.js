import mongoose, { Schema, models } from "mongoose";

const checkoutSchema = new Schema(
  {
    email: { type: String },
    name: { type: String },
    country: { type: String },
    address: { type: String },
 
  
 
  },
  {
    timestamps: true,
  }
);

const Checkout = models.Checkout || mongoose.model("Checkout", checkoutSchema);

export default Checkout;