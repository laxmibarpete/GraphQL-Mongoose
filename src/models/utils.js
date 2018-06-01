import { Mongoose } from "mongoose";
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test')
export const db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})
