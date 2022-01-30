import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  const col = props.col ? `grid-col-${props.col}` : "";
  const mdCol = props.mdCol ? `grid-md-col-${props.mdCol}` : "";
  const smCol = props.smCol ? `grid-sm-col-${props.smCol}` : "";
  const style = {
      gap : props.gap ? `${props.gap}px` : "0px"  
  }

  return <div className={`Grid ${col} ${mdCol} ${smCol}`} style={style}>{props.children}</div>;
};

Grid.propTypes = {
  col: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
