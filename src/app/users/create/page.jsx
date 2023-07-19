'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"


export default function CreateStudent(){

    const router = useRouter()

    const [newStudent, setNewStudent] = useState({
        name: "",
        age: 0
    })

    useEffect(()=>{
        console.log(newStudent)
    },[newStudent])

    const handleChange = (e) =>{
        setNewStudent({...newStudent, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/student', newStudent)
        .then((response)=>{
            console.log(response.data)
            setNewStudent({name:"",age:0})
            router.push("/users")
        })
    }

    return(
        <div>
            <form name="formUser" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={newStudent.name} onChange={(e)=>handleChange(e)} />
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={newStudent.age} onChange={(e)=>handleChange(e)} />
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}