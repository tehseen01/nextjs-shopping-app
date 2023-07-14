import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
  icon: { type: String },
});

const Category =
  mongoose.models.categories || mongoose.model("categories", categorySchema);

export default Category;
