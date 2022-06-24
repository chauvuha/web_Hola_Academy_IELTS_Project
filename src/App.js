import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IeltsInfo from './pages/IeltsInfo/IeltsInfo';
import IeltsPrep from './pages/IeltsPrep/IeltsPrep'
import RealTests from './pages/RealTests/RealTests'


function App() {
  return (
    <div className="App">
        <Header />
        {/* <IeltsGeneral /> */}
        {/* <IeltsInfo /> */}
        {/* <HomePage /> */}
        <RealTests />
        <Footer />
        {/* <IeltsInfo /> */}
    </div>
  );
}

export default App;
