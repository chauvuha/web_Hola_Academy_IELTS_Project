import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IeltsInfo from './pages/IeltsInfo/IeltsInfo';
import IeltsPrep from './pages/IeltsPrep/IeltsPrep'
import RealTests from './pages/RealTests/RealTests';
import Courses from './pages/Courses/Courses';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/ieltsinfo" element={<IeltsInfo />}></Route>
          <Route path="/ieltsprep" element={<IeltsPrep />}></Route>
          <Route path="/realtests" element={<RealTests />}></Route>
          <Route path="/tips" element={<Courses />}></Route>
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
