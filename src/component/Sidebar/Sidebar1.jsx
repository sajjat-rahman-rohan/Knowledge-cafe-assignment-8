import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar1 = ({ watchTime }) => {
  let totalMin = 0;
  return (
    <div className="cart">
      <h4 className="text-center total-min">
        Spent time on read : {totalMin} min
      </h4>
    </div>
  );
};

export default Sidebar1;
