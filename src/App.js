import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';

function App() {

  let getData = ()=>{

  }

  return (
    <>
    <Router>      
      <div className='background' style={{display:"flex"}}>
      <Sidebar/>
      <Routes>      
        <Route path='/dashboard' element={<Dashboard value={{earnings:30000, annEarnings:360000, task :20, pending:20}}/>}  />
        <Route path='/add-products' element={<AddProduct/>} />
        <Route path='/all-products' element={<AllProducts/>} /> 
        <Route path='/edit-product' element={<EditProduct/>} /> 
        <Route path='/' element={<Dashboard value={{earnings:30000, annEarnings:360000, task :20, pending:20}}/>}  />       
      </Routes>
      </div>
      
    </Router>

    </>    
    
  );
}

export default App;
