import React from "react";
import { Skeleton } from "antd";
import './LoadingProductInfo.css'

function LoadingProductInfo(props) {
  return (
    <div className="loading">
      <Skeleton.Image active style={{ width: "668px", height: "500px" }} />
      <Skeleton active />
    </div>
  );
}

export default LoadingProductInfo;
