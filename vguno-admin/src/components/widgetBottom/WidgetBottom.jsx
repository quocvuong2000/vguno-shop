import React from 'react';
import './widget-bottom.scss';
import WidgetBottomLeft from "./widgetBottomLeft/WidgetBottomLeft";
import WidgetBottomRight from "./widgetBottomRight/WidgetBottomRight";

const WidgetBottom = () => {
  return (
    <div className='widget-bottom'>
        <div className="row">
          <div className="col-7">
            <WidgetBottomLeft />
          </div>
          <div className="col-5">
            <WidgetBottomRight />
          </div>
        </div>
    </div>
  )
}

export default WidgetBottom