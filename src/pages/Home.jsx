import React, { useState, useContext, useEffect, useDeferredValue } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterIndex, setSort, setCurrentPage } from '../redux/slices/sortSlice';
import axios from 'axios';

import '../scss/app.scss';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/skeleton';
import Pagination from '../components/Pagination/index';
import { searchContext } from '../App';

export default function Home() {
  const { filterIndex, sort, currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { searchItem } = useContext(searchContext);
  const [items, setItems] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const onClickCategory = (i) => {
    dispatch(setFilterIndex(i));
  };

  useEffect(() => {
    setShowSkeleton(true);

    const category = filterIndex > 0 ? `&category=${filterIndex}` : '';
    const sortBy = sort.desc.replace('-', '');
    const order = sort.desc.includes('-') ? 'asc' : 'desc';
    const search = searchItem ? `&search=${searchItem}` : '';

    axios
      .get(
        `https://6650e2e120f4f4c442766bbe.mockapi.io/items/pizzas?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setShowSkeleton(false);
      });

    window.scrollTo(0, 0);
  }, [filterIndex, sort, currentPage, searchItem]);

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
        <Categories filterIndex={filterIndex} setCategory={onClickCategory} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{showSkeleton ? skeletons : pizzas}</div>
      <Pagination
        onChangePage={(number) => dispatch(setCurrentPage(number))}
        currentPage={currentPage}
      />
    </div>
  );
}
