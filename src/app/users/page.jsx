'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Users(){
    
    const [allStudents, setAllStudents] = useState([])

    useEffect(()=>{
        axios.get('https://mongo-next-students.vercel.app/api/student')
        .then(response=>{
            console.log(response.data.data)
            setAllStudents(response.data.data)
        })
    },[])
    return(
        <div class>
            {allStudents && allStudents.length>0 
            ?
             allStudents.map((student, index)=>{
                return(
                    <div key={index}>
                        <h1>{student.name}</h1>
                        <p>{student.age}</p>
                    </div>
                )
             })
            :
            <>
            <p>Loading...</p>
            </>
            }
        </div>
    )
}