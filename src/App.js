import { HashRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ProfilePage from './Page/profile';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<ProfilePage/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
