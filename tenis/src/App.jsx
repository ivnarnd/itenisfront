
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage.jsx';
import CourtPage from './pages/Courts/CourtPage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<HomePage/>}/>
        <Route exact path={'/courts'} element={<CourtPage/>}/>
        <Route exact path={'/register'} element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
