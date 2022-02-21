import React from "react";

import DashBoardWapper, {
  DashBoardWapperMain,
} from "../components/dashBoardWarpper/DashBoardWapper";
import WidgetTop from "../components/widgetTop/widgetTop";
import WidgetBottom from "../components/widgetBottom/WidgetBottom";

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
        <WidgetBottom></WidgetBottom>
      </DashBoardWapperMain>
    </DashBoardWapper>
  );
};

export default Dashboard;
