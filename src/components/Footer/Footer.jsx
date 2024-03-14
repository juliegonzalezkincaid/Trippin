import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return <footer style={{ filter: "drop-shadow(4px 4px 3px hsl(94, 82%, 60%))"}}>&copy; Julie Gonzalez-Kincaid </footer>;
}


export default Footer;
