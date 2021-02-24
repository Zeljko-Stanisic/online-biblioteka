import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from "./components/Navbar";
import { BrowserRouter} from 'react-router-dom';
import Router from './Router';
import SideMenu from './components/SideMenu';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navs />
        <SideMenu/>        
      </div>
      <Router />
    </BrowserRouter>
    
  );
}

export default App;
