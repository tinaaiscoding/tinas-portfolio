import React, { useEffect, useState } from 'react';

import classes from './TilesBg.module.css';

const TilesBg = (props) => {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  const [size, setSize] = useState(50);
  const docWidth = document.body.clientWidth;

  const changeTileSize = () => {
    if (docWidth < 600) {
      setSize(50);
      setColumns(8);
      setRows(8);
    } else if (docWidth > 600 && docWidth < 900) {
      setSize(50);
      setColumns(10);
      setRows(8);
    } else if (docWidth >= 900 && docWidth <= 1224) {
      setSize(50);
      setColumns(12);
      setRows(7);
    } else if (docWidth >= 1224 && docWidth <= 1500) {
      setSize(100);
      setColumns(14);
      setRows(7);
    } else if (docWidth > 1500) {
      setSize(100);
      setColumns(17);
      setRows(9);
    } 
  };

  useEffect(() => {
    changeTileSize();
  });


  const createGrid = () => {
    setColumns(Math.floor(docWidth / size));
    setRows(Math.floor(document.body.clientHeight / size));
  };

  window.onresize = () => {
    changeTileSize();
    createGrid();
  };

  const gridTemplate = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div
      id={classes.tiles}
      className={`${classes.tilesHeight} ${props.className}`}
      style={gridTemplate}
    >
      {Array.from(Array(columns * rows)).map((tile, index) => {
        return <div key={index} className={classes.tile}></div>;
      })}
    </div>
  );
};

export default TilesBg;
