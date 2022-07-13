import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Homepage from './layout/Homepage'
import Completed from './layout/Completed'
import TestGrid  from './layout/TestGrid'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Homepage />} />
        <Route exact path="/completed" element={ <Completed />} />
        <Route exact path="/test" element={ <TestGrid />} />
      </Routes>
    </Router>
    
  );
}

export default App;
