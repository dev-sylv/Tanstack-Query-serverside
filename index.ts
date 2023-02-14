import express, { Application } from "express";

import cors from "cors";

const port: number = 3400;

const app: Application = express();

app.use(express.json());
app.use(cors());

app.listen(port, () =>{
    console.log("")
    console.log("Server is created and up and running on port", port)
})