'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter, usePathname } from "next/navigation"


export default function CreateStudent(){

    const router = useRouter()

    const path = usePathname()
    const idPath = path.split('/').pop()

    console.log(idPath)

    const [student, setStudent] = useState({
        name: "",
        age: 0
    })

    const [newStudent, setNewStudent] = useState({
        name: student.name,
        age: student.age
    })

    useEffect(()=>{
        console.log(newStudent)
    },[newStudent])

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/student/${idPath}`)
        .then((response)=>{
            setStudent(response.data)
        })
    },[])
    useEffect(()=>{
        setNewStudent(student)
    },[student])

    const handleChange = (e) =>{
        setNewStudent({...newStudent, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:3000/api/student/${idPath}`, newStudent)
        .then((response)=>{
            console.log(response.data)
            setNewStudent({name:"",age:null})
            router.push("/users/modify")
        })
    }

    return(
        <div>
           {student && student.name.length>0 && student.age>0 
           ?
            <form name="formUser" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={newStudent.name} onChange={(e)=>handleChange(e)} />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={newStudent.age} onChange={(e)=>handleChange(e)} />
                <button type="submit">Modify</button>
            </form>
            :
            <p>loading...</p>}
        </div>
    )
}