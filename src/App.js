import React from 'react';
import GlobalFonts from './components/styles/GlobalFonts';
import CSSReset from './components/styles/CSSReset';
import GlobalStyles from './components/styles/GlobalStyles';

function App() {
  return (
    <>
      <CSSReset />
      <GlobalFonts />
      <GlobalStyles />
      <h1>
        App Placeholder
      </h1>
    </>
  );
}

export default App;
