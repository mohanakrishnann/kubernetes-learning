import React from 'react';
import Navbar from "./components/redux/Navbar";
import AddTask from "./components/redux/AddTask";
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/config";

function App() {
  return (
      <Provider store={store}>
      <Navbar/>
      <AddTask/>

    </Provider>

  );
}


export default App;
