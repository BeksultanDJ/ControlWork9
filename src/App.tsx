import './App.css'
import { Route, Routes } from "react-router-dom";
import AddExIn from "./components/Add.tsx";
import DisplayInfo from "./components/DisplayInfo.tsx";
import Categories from "./components/Categories.tsx";

function App() {

  return (
    <>
      <AddExIn/>
        <DisplayInfo/>
        <Routes>
            <Route path="categories" element={<Categories/>}/>
        </Routes>
    </>
  )
}

export default App
