import React, { useContext, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useNavigate, useParams } from 'react-router';
import MainContext from '../MainContext';
import Brand from './Brand';
import Download from './Download';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const Collection = () => {
  const { slugs } = useParams();
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, [slugs]);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    navigate('/');
  };

  return (
    <main className='content'>
      <header className='header'>
        <div className='all-brands-group'>
          <Link to='/' onClick={clearSelectedBrands}>
            <AiOutlineArrowLeft />
            All Brands
          </Link>
        </div>
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className='brands'>
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;
