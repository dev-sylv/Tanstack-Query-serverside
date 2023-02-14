import express, { Application, Request, Response } from "express";

import PostModels from "./Models/post.models";

import cors from "cors";

const port: number = 3400;

const app: Application = express();

app.use(express.json());
app.use(cors());

// Controllers & Routes together:

// Get all post:
app.get("/api/post/getallposts", (req: Request, res: Response) =>{
    const retrievePosts = PostModels.find();
    res.status(200).json(retrievePosts)
})

// Get one post:

// Create Post:

// Edit single post:

// Delete single post:

app.listen(port, () =>{
    console.log("")
    console.log("Server is created and up and running on port", port)
})