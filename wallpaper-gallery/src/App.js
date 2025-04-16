import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import WallpaperGallery from './components/WallpaperGallery';
import styled from 'styled-components';

// Styled container for the entire app
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

// Basic navigation bar
const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  color: white;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<WallpaperGallery />} />
          <Route path="*" element={<div>Page not found</div>} /> {/* Catch-all route */}
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;