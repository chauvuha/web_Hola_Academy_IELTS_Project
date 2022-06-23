import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IeltsInfo from './pages/IeltsInfo/IeltsInfo';
import IeltsGeneral from './pages/IeltsGeneral/IeltsGeneral'






function App() {
  return (
    <div className="App">
        <Header />
        <IeltsGeneral />
        {/* <IeltsInfo /> */}
        {/* <HomePage /> */}
        <Footer />
        {/* <IeltsInfo /> */}
    </div>
  );
}

export default App;
