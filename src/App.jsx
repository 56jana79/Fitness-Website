
import './App.css'
import Home from './components/Home'
import Biceps from './components/Biceps'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Byprop from './components/byprop'
import Backprop from './components/Backprop'
import Legprops from './components/Legprops'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Food from './component3/Food'
import Bmi from './component2/Bmical'

function App() {


  return (
    <div className='holecontainer'>
    


    <BrowserRouter>
 <div className='navcontainer'>
    <h2><Link to='/'>Home</Link></h2>
    <h2><Link to='/Bmi'>BMI Calculator</Link></h2>
    <h2><Link to='/Food'>Food</Link></h2>
    
 
 </div> 

      <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/Biceps' element={<Biceps/>} />
  <Route path='/Byprops' element={<Byprop/>} />
  <Route path='/Back' element={<Backprop/>} />
  <Route path='/Leg' element={<Legprops/>} />
  <Route path='/Bmi' element={<Bmi/>} />
  <Route path='/Food' element={<Food className='food' />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
