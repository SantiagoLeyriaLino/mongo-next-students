import dbConnect from "@/lib/dbConnect";
import { StudentModel } from "@/models/Student";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) =>{
    await dbConnect()
    const id = params.id
    try{
        const user = await StudentModel.findById(id)
        return NextResponse.json(user, {status:200})
    }catch(err){
        return NextResponse.json({error:err.messaje},{status:400})
    }
}

export const DELETE = async(req, {params}) =>{
    await dbConnect()
    const id = params.id
    try{
        const userDeleted = await StudentModel.findByIdAndDelete(id)
        if(!userDeleted){
            return NextResponse.json({message:`Documet whit ID: ${id} not found.`}, {status:404})
        }
        return NextResponse.json({data:userDeleted}, {status:200})
    }catch(err){
        return NextResponse.json({error:err.message}, {status:400})
    }
}

export const PUT = async(req, {params}) =>{
    await dbConnect()
    const id = params.id
    const body = await req.json()
    try{
        const userUpdated = await StudentModel.findByIdAndUpdate(id, {$set:{...body}}, {new: true})
        if(!userUpdated){
            return NextResponse.json({message:`Documet whit ID: ${id} not found.`}, {status:404})
        }
        return NextResponse.json({data:userUpdated}, {status:200})
    }catch(err){
        return NextResponse.json({error:err.message}, {status:400})
    }
}