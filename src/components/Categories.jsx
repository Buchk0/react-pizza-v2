import React, { useState } from 'react';

export default function Categories({ filterIndex, setCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, e) => {
          return (
            <li
              key={e}
              className={e === filterIndex ? 'active' : ''}
              onClick={() => setCategory(e)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
