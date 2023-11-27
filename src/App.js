import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Dashboard from './Component/dashboard';
import FlipBook from './Component/flipbook';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard/>}/>
      <Route path="/story/*" element={<FlipBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
