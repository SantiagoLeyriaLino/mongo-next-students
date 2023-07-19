'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Users(){

    const router = useRouter()
    
    const [allStudents, setAllStudents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/api/student')
        .then(response=>{
            console.log(response.data.data)
            setAllStudents(response.data.data)
        })
    },[])

    const handleClick = (id) =>{
        router.push(`/users/modify/${id}`)
    }

    return(
        <div class>
            {allStudents && allStudents.length>0 
            ?
             allStudents.map((student, index)=>{
                return(
                    <div key={index} onClick={()=>handleClick(student._id)}>
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