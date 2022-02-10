import React, { useContext } from 'react';
import { Search } from './Search';
import LazyLoad from 'react-lazyload';
import Brand from './Brand';
import MainContext from '../MainContext';
import Download from './Download';
import Loader from './Loader';
import { AutoSizer, List } from 'react-virtualized';

export const Content = () => {
  const { brands, selectedBrands } = useContext(MainContext);

  const rowRenderer = ({ key, index, style }) => {
    return <Brand style={style} brand={brands[index]} key={key} />;
  };

  return (
    <main className='content'>
      <header className='header'>
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className='brands'>
        {/* brands.map((brand) => (
          <Brand brand={brand} />
        )) */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={113}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
};
