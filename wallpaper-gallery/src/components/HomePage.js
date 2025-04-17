import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import styled from 'styled-components';
import KG3 from './KG3';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
  position: relative;
`;

const GalleryLinkBottom = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #eee;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 2s forwards;

  &:hover {
    background-color: #ddd;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const OpenGalleryButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #eee;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  opacity: 0;
  animation: fadeIn 1s ease-in-out 2s forwards;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

function HomePage() {
  const font = useRef(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (loadedFont) => {
        font.current = loadedFont;
      }
    );
  }, []);

  return (
    <HomePageContainer>
      <Canvas camera={{ position: [0, 0, 15] }}>
        {font.current && <KG3 font={font.current} />}
      </Canvas>
      <OpenGalleryButton to="/gallery">Open Gallery</OpenGalleryButton>
      <GalleryLinkBottom to="/gallery">Enter Gallery</GalleryLinkBottom>
    </HomePageContainer>
  );
}

export default HomePage;