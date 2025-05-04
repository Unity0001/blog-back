import mongoose, { Schema, Document } from "mongoose";

export interface PostDocument extends Document {
    _id: mongoose.Types.ObjectId;
    nome: String;
    slug: String;
    postTag: mongoose.Types.ObjectId;
}

const PostSchema: Schema = new Schema({
    nome: { types: String, required: true },
    slug: { types: String, required: true },
    postTag: { types: Schema.Types.ObjectId, required: true }
}, { timestamps: true });

export const Post = mongoose.model<PostDocument>('Post', PostSchema);