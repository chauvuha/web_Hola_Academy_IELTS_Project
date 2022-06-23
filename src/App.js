import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IeltsInfo from './pages/IeltsInfo/IeltsInfo'





function App() {
  return (
    <div className="App">
        <Header />
        <IeltsInfo />
        {/* <HomePage /> */}
        <Footer />
        {/* <IeltsInfo /> */}
    </div>
  );
}

export default App;
