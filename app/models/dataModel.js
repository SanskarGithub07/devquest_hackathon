import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    sno: Number,
    title: String,
    price: String,
    website: String,
});

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

export default Data;
