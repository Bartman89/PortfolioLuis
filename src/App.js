import CrudApi from './componentes/CrudApi'
import Menu from './componentes/Menu'



import {Routes, Route} from "react-router-dom";


import  './App.css'


function App() {
  return (
    <>
    <div className="container-fluid p-3 d-flex flex-row ">

    <Menu></Menu>
    <div className="container d-flex justify-content-center">
    <div className="col-auto">
    <Routes>

    <Route path='/' element={<CrudApi></CrudApi>}></Route>
    <Route path='/*' element={<CrudApi></CrudApi>}></Route>
    <Route path='/pokemones' element={<CrudApi></CrudApi>}></Route>
    <Route path='/contador' element={<CrudApi></CrudApi>}></Route>
    <Route path='/formulario' element={<CrudApi></CrudApi>}></Route>
    <Route path='/formulario2' element={<CrudApi></CrudApi>}></Route>
    <Route path='/modales' element={<CrudApi></CrudApi>}></Route>
    <Route path='/todolist' element={<CrudApi></CrudApi>}></Route>
    </Routes>
    </div>
    </div>
    </div>
    </>
    

  )
}

export default App