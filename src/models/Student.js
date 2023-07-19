import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please complete te field"]
    },
    age:{
        type: Number,
        required: [true, "Please complete te field"]
    }
},{
    timestamps: true,
    versionKey: false
})

export const StudentModel = mongoose?.models?.Student || mongoose.model('Student',studentSchema)