import React from 'react';
import styled from 'styled-components';

const CategoryBarContainer = styled.div`
  overflow-x: auto;
  padding: 10px 20px;
  background-color: #222; /* Dark background for the bar */
  border-bottom: 1px solid #333;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const CategoryItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const CategoryLink = styled.button`
  background: none;
  border: none;
  color: #ddd;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    color: #fff;
    background-color: #333;
  }

  &.active {
    color: #fff;
    background-color: #007bff; /* Blue accent for active category */
  }
`;

function CategoryBar({ categories, onCategoryClick, activeCategory }) {
  return (
    <CategoryBarContainer>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category}>
            <CategoryLink
              onClick={() => onCategoryClick(category)}
              className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryBarContainer>
  );
}

export default CategoryBar;