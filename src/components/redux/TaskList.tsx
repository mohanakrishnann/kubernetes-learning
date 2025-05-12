import React, {useState} from "react";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const TaskList = ({title,description}:{title: string[], description: string[]}) =>{
    const [clear,setClear] = useState("");
    const [tasks, setTasks] = useState({ title, description });


    const updateTask = ()=>{
        alert("task updated successfully")

    }

    const deleteTask = (index:any) =>{
        const newTitle = tasks.title.filter((_, i) => i !== index);
        const newDescription = tasks.description.filter((_, i) => i !== index);
        setTasks({title: newTitle, description: newDescription});
        // setTasks(tasks.filter((_, i) => i !== index));

    }

    return <div className="flex justify-center">
        <table className="table-fixed">
            <thead>
            <tr className="text-center">
                <th className="border px-4 py-2 ">#</th>
                <th className="border px-4 py-2 ">Title</th>
                <th className="border px-4 py-2 ">Descriptions</th>
                <th className="border px-4 py-2 ">Actions</th>
            </tr>
            </thead>
            <tbody>
            {title.map((task,index)=>(
            <tr key={index} className="text-center">
                <td  className="border px-4 py-2">{index + 1}</td>
                <td  className="border px-4 py-2">{task}</td>
                <td  className="border px-4 py-2">{description[index]}</td>
                <td >
                    <Button variant="outlined" startIcon={<EditIcon />} className="mx-3" onClick={updateTask}>
                        Edit
                    </Button>
                     <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>deleteTask(index)}>
                        Delete
                    </Button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default TaskList;
