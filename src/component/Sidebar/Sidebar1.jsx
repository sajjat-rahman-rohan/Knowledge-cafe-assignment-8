import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar1 = ({ spentTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("spentTime");
    setTime(getWatchTimeFromStorage);
    // console.log(getWatchTimeFromStorage);
  }, [spentTime]);

  return (
    <div className="sidebar1">
      <h4 className="text-center total-min">Spent time on read : {time} min</h4>
    </div>
  );
};

export default Sidebar1;
