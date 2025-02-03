import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <div className="Body">
      <SideBar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
