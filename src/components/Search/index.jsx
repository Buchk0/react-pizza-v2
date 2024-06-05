import React from 'react';
import { useContext } from 'react';

import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import { searchContext } from '../../App';

export const Search = () => {
  const { searchItem, setSearchItem } = useContext(searchContext);
  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="512"
        viewBox="0 0 512 512"
        width="512">
        <title />
        <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
      </svg>
      <input
        value={searchItem}
        onChange={(event) => setSearchItem(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {searchItem && (
        <svg
          className={styles.closeIcon}
          onClick={() => setSearchItem('')}
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 0 48 48"
          width="48">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};
