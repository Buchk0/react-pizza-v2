import React, { useState } from 'react';

export default function Categories({ activeIndex, setCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, e) => {
          return (
            <li
              key={e}
              className={e === activeIndex ? 'active' : ''}
              onClick={() => setCategory(e)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
