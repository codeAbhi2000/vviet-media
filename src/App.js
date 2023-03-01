
import './App.css';
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home'
import EditorDash from './pages/EditorDash';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <nav>
        <div className="logoTle">
            <div className="logo"></div>
            <span>Vviet-Media</span>
        </div>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/editorDash'>EditorDash</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/editorDash' element={<EditorDash/>}/>
      </Routes>
    </Router>
  );
}

export default App;
