import React, { useEffect, useState } from 'react';

import classes from './TilesBg.module.css';

const TilesBg = (props) => {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  let size = 0;

  useEffect(() => {
    changeTileSize()
  }, [])

  const changeTileSize = () => {
    if (document.body.clientWidth > 1000) {
      size = 100;
      setColumns(14);
      setRows(7);
    } else if (document.body.clientWidth <= 1000) {
      size = 50;
      setColumns(8);
      setRows(10);
    }
  };

  // const size = document.body.clientWidth > 800 ? 100 : 50;

  const createGrid = () => {
    setColumns(Math.floor(document.body.clientWidth / size));
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

  console.log(columns);
  console.log(rows)

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
