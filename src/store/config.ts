import {configureStore} from "@reduxjs/toolkit";
import student from "../slice/studentSlice";


export const store = configureStore({
    reducer : {
        student : student
    }
})


