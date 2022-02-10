import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={100}
    viewBox='0 0 476 100'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='8' y='3' rx='3' ry='3' width='128' height='10' />
    <rect x='5' y='40' rx='0' ry='0' width='70' height='40' />
    <rect x='87' y='40' rx='0' ry='0' width='70' height='40' />
    <rect x='169' y='40' rx='0' ry='0' width='70' height='40' />
    <rect x='260' y='40' rx='0' ry='0' width='70' height='40' />
  </ContentLoader>
);

export default Loader;
