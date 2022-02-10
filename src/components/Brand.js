import React, { useContext } from 'react';
import { getContrastYIQ } from '../helpers';
import MainContext from '../MainContext';
import Clipboard from 'react-clipboard.js';
import { MdOutlineContentCopy } from 'react-icons/md';

const Brand = ({ brand, style }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div style={style}>
      <div
        className={`brand ${
          selectedBrands.includes(brand.slug) ? 'selected' : ''
        }`}
      >
        <h5 onClick={toggleSelected}>{brand.title}</h5>
        <div className='brand-colors'>
          {brand.colors.map((color) => (
            <Clipboard
              onSuccess={(color) => setColor(color)}
              component='span'
              data-clipboard-text={color}
              className='brand-color'
              style={{
                '--bgColor': `#${color}`,
                '--textColor': getContrastYIQ(color),
              }}
            >
              <MdOutlineContentCopy />#{color}
            </Clipboard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
