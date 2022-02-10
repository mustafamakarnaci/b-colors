import React from 'react';
import { getContrastYIQ } from '../helpers';

export const Copied = ({ color }) => {
  console.log(color.text);
  return (
    <div
      className='copied'
      style={{
        '--bgColor': `#${color.text}`,
        '--textColor': `${getContrastYIQ(color.text)}`,
      }}
    >
      Copied {color.text} to clipboard
    </div>
  );
};
