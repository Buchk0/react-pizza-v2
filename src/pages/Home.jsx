import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

import '../scss/app.scss';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/skeleton';
import Pagination from '../components/Pagination/index';
import { searchContext } from '../App';

export default function Home() {
  const { searchItem } = useContext(searchContext);
  const [items, setItems] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [changeSort, setChangeSort] = useState({
    name: 'популярности',
    desc: 'rating',
  });
  const category = activeIndex > 0 ? `category=${activeIndex}` : '';
  const sort = changeSort.desc.replace('-', '');
  const order = changeSort.desc.includes('-') ? 'asc' : 'desc';
  const [onPagination, setOnPagination] = useState(1);

  useEffect(() => {
    setShowSkeleton(true);
    fetch(
      `https://6650e2e120f4f4c442766bbe.mockapi.io/items/pizzas?page=${onPagination}&limit=4&${category}&sortBy=${sort}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setShowSkeleton(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, changeSort, onPagination]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toString().toLowerCase().includes(searchItem.toString().toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeIndex={activeIndex} setCategory={(e) => setActiveIndex(e)} />
        <Sort changeSort={changeSort} setSort={setChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{showSkeleton ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setOnPagination(number)} />
    </div>
  );
}
