import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/dashboard';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import StoryPage from './Component/storypage';
import Username from './Component/usename';
import CharacterSelection from './Component/characterSelection';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Username/>}/>
      <Route path="/character-selection" element={<CharacterSelection/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/story" element={<StoryPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
