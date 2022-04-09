import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalFonts from './components/styles/GlobalFonts';
import CSSReset from './components/styles/CSSReset';
import GlobalStyles from './components/styles/GlobalStyles';
import Home from './components/routes/Home';
import Search from './components/routes/Search';

function App() {
  return (
    <>
      <Router>
        <CSSReset />
        <GlobalFonts />
        <GlobalStyles />
        <h1>
          App Placeholder
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
