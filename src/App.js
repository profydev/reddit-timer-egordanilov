import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from './components/styles/GlobalFonts';
import CSSReset from './components/styles/CSSReset';
import GlobalStyles from './components/styles/GlobalStyles';
import Home from './components/routes/Home';
import Search from './components/routes/Search';
import NotFound from './components/routes/NotFound';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
