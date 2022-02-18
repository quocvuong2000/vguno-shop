import React from 'react';
import './widget-top.scss';

const widgetTop = (props) => {
  return (
    <div className='widget-top'>
        <div className="widget-top__title">
            test
        </div>
        <div className="widget-top__sub">
            test
        </div>
        <div className="widget-top__amount">
            123123
            <i className='bx bx-down-arrow-alt'></i>
        </div>
    </div>
  )
}

export default widgetTop