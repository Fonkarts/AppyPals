import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.tsx';
import Homepage from './pages/homepage/Homepage.tsx';
import NotFound from './pages/not-found/NotFound.tsx';
import Admin from './pages/admin/Admin.tsx';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage/>}/>
          <Route path="admin" element={<Admin/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App