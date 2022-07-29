import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './layout/Homepage'
import Completed from './layout/Completed'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Homepage />} />
        <Route exact path="/completed" element={ <Completed />} />
      </Routes>
    </Router>
    
  );
}

export default App;
