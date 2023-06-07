import React, { useState } from 'react';

import classes from './TilesBg.module.css';

const TilesBg = (props) => {
  const size = document.body.clientWidth > 800 ? 100 : 50;
  const [columns, setColumns] = useState(14);
  const [rows, setRows] = useState(7);

  const createGrid = () => {
    setColumns(Math.floor(document.body.clientWidth / size));
    setRows(Math.floor(document.body.clientHeight / size));
  };

  window.onresize = () => createGrid();

  const gridTemplate = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div id={classes.tiles} className={`${classes.tilesHeight} ${props.className}`} style={gridTemplate}>
      {Array.from(Array(columns * rows)).map((tile, index) => {
        return (<div key={index} className={classes.tile}></div>)
      })}
    </div>
  );
};

export default TilesBg;
