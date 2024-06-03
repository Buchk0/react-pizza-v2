import React, { useState, useEffect } from 'react';

import '../scss/app.scss';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/skeleton';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [changeSort, setChangeSort] = useState({
    name: 'популярности',
    desc: 'rating',
  });

  useEffect(() => {
    setShowSkeleton(true);
    fetch(
      `https://6650e2e120f4f4c442766bbe.mockapi.io/items/pizzas?${
        activeIndex > 0 ? `category=${activeIndex}` : ''
      }&sortBy=${changeSort.desc.replace('-', '')}&order=${
        changeSort.desc.includes('-') ? 'asc' : 'desc'
      }`,
      // }&sortBy=${changeSort.desc}&order=desc`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setShowSkeleton(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, changeSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeIndex={activeIndex} setCategory={(e) => setActiveIndex(e)} />
        <Sort changeSort={changeSort} setSort={setChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {showSkeleton
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}
