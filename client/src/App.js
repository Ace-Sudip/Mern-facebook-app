import { Route, Routes, Navigate } from "react-router-dom";
import Loginscreen from "./screen/Loginscreen";
import Registerscreen from "./screen/Registerscreen";
import Dashboard from "./screen/Dashboard";




function App() {
  return (
    <>
   
    <Routes>
    <Route path="/" element={<Loginscreen/>}/>
      <Route path="/register" element={<Registerscreen/>}/>

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
    




    </>
  );
}

export default App;

export const ProtectedRoute=({children})=>{
  if(localStorage.getItem("currentUser")){
    return children
  } else{
    return <Navigate to="/"/>
  }

 
  

}