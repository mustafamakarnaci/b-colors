import { useState, useEffect } from 'react';
import './App.css';
import { Content } from './components/Content';
import Sidebar from './components/Sidebar';
import MainContext from './MainContext';
import BrandsData from './brands.json';
import { Copied } from './components/Copied';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './components/Collection';
import { forceCheck } from 'react-lazyload';

function App() {
  const brandsArray = [];

  // eslint-disable-next-line array-callback-return
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1200);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);

  useEffect(() => {
    forceCheck();
  }, [brands]);

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Routes>
            <Route exact path='/' element={<Content />} />
            <Route exact path='/collection/:slugs' element={<Collection />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
