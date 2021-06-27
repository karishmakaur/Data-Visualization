import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/karishmakaur/4ff5ad16318f5f2a0c6accac63b47801/raw/UNPopulation2019.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then(data => {
      setData(data.slice(0, 10));
    });
  }, []);
  
  return data;
};