import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import OurService from './views/OurService/OurService';
const root =createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/ourservice' element={<OurService/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
