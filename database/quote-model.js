import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const quoteSchema = new Schema ({
    name: { type: String, trim: true, required: true},
    quote: { type: String, trim: true, required: true},
    author: { type: String, trim: true, required: true}
}, { timestamps: true });

const Quote = models?.Quote || model("Quote", quoteSchema);

export default Quote;