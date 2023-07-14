import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
  icon: { type: String },
});

const Brand = mongoose.models.brands || mongoose.model("brands", brandSchema);

export default Brand;
