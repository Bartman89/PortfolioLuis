import CrudApi from './componentes/CrudApi';
import Menu from './componentes/Menu';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className="container-fluid p-3 d-flex flex-row ">
        <Menu></Menu>
        <div className="container d-flex justify-content-center">
          <div className="col-auto">
            <Router>
              <Routes>
                <Route path='/' element={<CrudApi />}></Route>
                <Route path='/*' element={<CrudApi />}></Route>
                <Route path='/pokemones' element={<CrudApi />}></Route>
                <Route path='/contador' element={<CrudApi />}></Route>
                <Route path='/formulario' element={<CrudApi />}></Route>
                <Route path='/formulario2' element={<CrudApi />}></Route>
                <Route path='/modales' element={<CrudApi />}></Route>
                <Route path='/todolist' element={<CrudApi />}></Route>
              </Routes>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
