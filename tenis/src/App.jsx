
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/HomePage.jsx';
import CourtPage from './pages/Courts/CourtPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<HomePage/>}/>
        <Route exact path={'/courts'} element={<CourtPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
