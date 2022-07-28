import { Routes, Route, BrowserRouter} from 'react-router-dom'

import {Navbar} from './components/Navbar'
import { Aboutpage } from './pages/Aboutpage';
import {Homepage} from './pages/Homepage'
import { Showdetails } from './pages/Showdetails';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
    <Routes>
        <Route path='/' element = {<Homepage />}  />
        <Route path='/about' element = {<Aboutpage />} />
        <Route path='/showdetails/:id' element = {<Showdetails />} />

    </Routes>
    </div>
    </BrowserRouter>
      
      
    
  );
}

export default App;
