import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../MainContext';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineLink } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

const Download = () => {
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext);
  const [downloadURL, setDownloadURL] = useState('');
  const [cssFormat, setCssFormat] = useState('css');

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = '';
      switch (cssFormat) {
        case 'css':
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `.--${slug}-${key} { color: #${color}; }\n`;
            });
          });
          break;
        case 'scss':
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `$${slug}-${key}: #${color};\n`;
            });
          });
          break;
        case 'less':
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`;
            });
          });
          break;

        default:
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `.--${slug}-${key} { color: #${color}; }\n`;
            });
          });
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadURL('');
      };
    }
  }, [selectedBrands, cssFormat]);

  const cancelSelectedBrands = () => {
    setSelectedBrands([]);
  };

  const getLink = () => {
    prompt(
      "Here's is the URL to share",
      `http://localhost:3000/collection/${selectedBrands.join(',')}`,
    );
  };

  return (
    <div className='download'>
      <div className='actions'>
        <select
          name='downloadFormat'
          onChange={(e) => setCssFormat(e.target.value)}
        >
          <option value='css'>CSS</option>
          <option value='scss'>SCSS</option>
          <option value='less'>LESS</option>
        </select>
        <a download={`brand.${cssFormat}`} href={downloadURL}>
          <FiDownload />
        </a>
        <button onClick={getLink}>
          <MdOutlineLink />
        </button>
        <IoMdClose onClick={cancelSelectedBrands} />
      </div>
      <div className='selected'>
        {`${selectedBrands.length} brands are collected`}
      </div>
    </div>
  );
};

export default Download;
