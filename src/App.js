import './App.css';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';
import Footer from './Footer/Footer';
import './MediaQueries.css'
import './Reset.css'
import './Vars.css'
import './Script.js'
import 'https://kit.fontawesome.com/b0066a3d5d.js'

function App() {
  return (
    <body className="Body">
      <SideBar/>
      <main className="main-container">
        <Header/>
        <PlaylistContainer/>
      </main>
      <Footer/>
    </body>
  );
}

export default App;
