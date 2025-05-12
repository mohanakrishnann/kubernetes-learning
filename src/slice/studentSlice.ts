import {createSlice} from "@reduxjs/toolkit";


// interface initialState{
//     title : string[],
//     description : string[]
// }

const initialState : any = [];
export const studentSlice = createSlice({
  name: 'student',
    initialState,
    reducers: {
      addTask: (state, action) => {
           state.push(action.payload);
      }
    }
})

export const {addTask} = studentSlice.actions;
 export default studentSlice.reducer

// Action creators for the types of actions that are handled by the slice reducer.
// These are the functions that components will use to dispatch actions to the reducer.
