import { Schema } from "mongoose";
import mongoose from "mongoose";

var customer = new Schema({
    id: Number,
    name: String,
    age: Number
}, {collection:"TodoList"});
// we need to create a model using it
var ToDo = mongoose.model('ToDo', customer);
export default ToDo