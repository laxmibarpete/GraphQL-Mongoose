import express from "express";
import expressGraphQL from "express-graphql";
import schema from "./src/schema/schema";
import { db } from "./src/models/utils";

const app = express();




app.use("/graphql",expressGraphQL({
  schema:schema,
  graphiql:true
}));

app.listen(4001,()=>{
    console.log("Server Running on Port No 4000");
    
})