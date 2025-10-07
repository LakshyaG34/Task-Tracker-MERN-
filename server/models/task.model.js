import mongoose from "mongoose"
import Auth from "./auth.model.js";

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Auth",
        required : true
    },
    dueDate : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        enum : ["pending", "in-progress", "completed"],
        default : "pending"
    }
}, {timestamps: true});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);