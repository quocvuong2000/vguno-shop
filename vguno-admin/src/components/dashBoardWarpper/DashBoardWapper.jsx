import React from 'react';

import './dash-board.scss';

const DashBoardWapper = (props) => {
  return (
    <div className='dashboard'>
        {props.children}
    </div>
  )
};

export const DashBoardWapperMain = (props)=> {
  return (
    <div className='dashboard__main'>
        {props.children}
    </div>
  )
};

export default DashBoardWapper;