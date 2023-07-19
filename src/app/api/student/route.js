import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/Student";

export const POST = async(req, res) =>{
    await dbConnect()
    try{
        const body = await req.json()
        const newStudent = await StudentModel.create(body)
        return NextResponse.json({data:newStudent},{status:201})
    }catch(err){
        return NextResponse.json({error:err.message}, {status:400})
    }
}
export const GET = async() =>{
    await dbConnect()
    try{
        const allStudents = await StudentModel.find({})
        return NextResponse.json({data:allStudents}, {status:200})
    }catch(err){
        return NextResponse.json({error:err.message}, {status:400})
    }
}
