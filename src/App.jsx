import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import DisableDevtool from 'disable-devtool';
import { init } from 'console-ban'

// DisableDevtool();
// const div = document.createElement('div')
// div.innerHTML = 'Stop'

// init({
//   // Rewrite the <body></body> as a string
//   write: '<h1> Stop </h1>',
//   // or rewrite a element
//   write: div
// })

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
