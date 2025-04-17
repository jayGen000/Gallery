import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryBar from './CategoryBar'; // Import the CategoryBar component

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
  background-color: #1e272e; /* Dark blue background */
  min-height: 100vh;
`;

const WallpaperImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Darker shadow for dark theme */
`;

function WallpaperGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Abstract', 'Nature', 'City', 'Animals', 'Technology']; // Example categories

  const allWallpapers = [
    { url: "https://via.placeholder.com/250x350/007bff/FFFFFF?text=Abstract", category: 'Abstract' },
    { url: "https://via.placeholder.com/250x350/28a745/FFFFFF?text=Nature", category: 'Nature' },
    { url: "https://via.placeholder.com/250x350/dc3545/FFFFFF?text=City", category: 'City' },
    { url: "https://via.placeholder.com/250x350/ffc107/000000?text=Animals", category: 'Animals' },
    { url: "https://via.placeholder.com/250x350/17a2b8/FFFFFF?text=Technology", category: 'Technology' },
    // Add more links here with category information
  ];

  const filteredWallpapers = activeCategory === 'All'
    ? allWallpapers
    : allWallpapers.filter(wallpaper => wallpaper.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <CategoryBar
        categories={categories}
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />
      <GalleryContainer>
        {filteredWallpapers.map((wallpaper, index) => (
          <WallpaperImage key={index} src={wallpaper.url} alt={`Wallpaper ${index + 1}`} />
        ))}
      </GalleryContainer>
    </div>
  );
}

export default WallpaperGallery;