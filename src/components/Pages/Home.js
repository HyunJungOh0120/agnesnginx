import React from 'react';
import Board from '../Board';
import Contents from '../Contents';
import Gallery from '../Gallery';
import Headers from '../Headers';
import Sayings from '../Sayings';

export const Home = () => {
  return (
    <>
      <Board />

      <Contents />
      <Sayings />
      <Gallery />
    </>
  );
};
