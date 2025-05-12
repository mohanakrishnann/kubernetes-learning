import React, {useState} from "react";
import TaskList from "./TaskList";
import {addTask as addTaskAction} from "../../slice/studentSlice";
import {useDispatch} from "react-redux";

const AddTask = () =>{
    const [title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const [titleValue,setTitleValue] = useState<string[]>([]);
    const [descriptionValue,setDescriptionValue] = useState<string[]>([]);
    const dispatch = useDispatch();

function addtitleValue(){
    if(title && description){
        setTitleValue(prevState  => [...prevState,title])
        setDescriptionValue(prevState => [...prevState,description])

    }
}


    const handleChange = (event:any) => {
       setTitle(event.target.value)
    };

    const handleChangeDescription = (event:any) => {
        setDescription(event.target.value)
    };


    const handleSubmit = (event:any) => {
        event.preventDefault();
        clearInputFields();
    };

    const clearInputFields = () =>{
        setTitle('');
        setDescription('');
    }

    return <>
        <div className="max-w-md mx-auto p-6 bg-blue-300 shadow-md rounded-lg my-6">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Task Title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Task Description</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={description}
                        onChange={handleChangeDescription}
                    />
                </div>
                <button type="submit" className="text-gray-700 font-bold my-2" onClick={addtitleValue}>Add Task</button>
            </form>
        </div>
        <TaskList title={titleValue} description={descriptionValue}/>
    </>


}


export default AddTask;
