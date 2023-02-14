import mongoose, { model, Schema } from "mongoose";

interface Data {
    title: string,
    description: string
};

interface MyData extends Data, Document{};

const postSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const PostModels = model<MyData>("Posts collections", postSchema);

export default PostModels