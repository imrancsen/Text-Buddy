import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Signup from './components/Signup';
import Error from './components/Error';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/textform" element={<TextForm />}/>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
