import React from "react";

import DashBoardWapper, {
  DashBoardWapperMain,
} from "../components/dashBoardWarpper/DashBoardWapper";
import WidgetTop from "../components/widgetTop/widgetTop";
import WidgetBottomLeft from "../components/widgetBottom/widgetBottomLeft/WidgetBottomLeft";
import WidgetBottomRight from "../components/widgetBottom/widgetBottomRight/WidgetBottomRight";

const Dashboard = () => {
  return (
    <DashBoardWapper>
      <DashBoardWapperMain>
        <div className="row">
          <div className="col-4 mb">
            <WidgetTop></WidgetTop>
          </div>
          <div className="col-4">
            <WidgetTop></WidgetTop>
          </div>
          <div className="col-4">
            <WidgetTop></WidgetTop>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <WidgetBottomLeft />
          </div>
          <div className="col-4">
            <WidgetBottomRight />
          </div>
        </div>
      </DashBoardWapperMain>
    </DashBoardWapper>
  );
};

export default Dashboard;
