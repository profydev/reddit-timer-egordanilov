import React from 'react';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from './components/styles/GlobalFonts';
import CSSReset from './components/styles/CSSReset';
import GlobalStyles from './components/styles/GlobalStyles';
import Home from './components/routes/Home';
import Search from './components/routes/Search';
import NotFound from './components/routes/NotFound';
import Header from './components/Header';
import headerLogo from './headerLogo.svg';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CSSReset />
        <GlobalFonts />
        <GlobalStyles />
        <Header>
          <div className="header__logo"><Link to="/"><img src={headerLogo} alt="header logo" /></Link></div>
          <div className="header__links">
            <li><Link to="/search?q=javascript">Search</Link></li>
            <li><HashLink to="/#how-it-works">How it works</HashLink></li>
            <li><HashLink to="/#about">About</HashLink></li>
          </div>
        </Header>
        <h1>
          App Placeholder
          About
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
