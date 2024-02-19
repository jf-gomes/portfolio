import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
