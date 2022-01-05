import React from 'react'
import {BrowserRouter} from "react-router-dom";  //browser router

//HOC
import DefaultHoc from './HOC/Default.HOC';

//Components 
import Temp from './components/temp';


function App() { 
  return (
    <>
    <BrowserRouter>
      <DefaultHoc path ="/" exact component={Temp}/> 
      <h1 className="text-green-500">Hello world!</h1>
    </BrowserRouter>
    </>
  );
}

export default App;

