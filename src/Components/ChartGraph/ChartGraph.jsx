import React from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";

const ChartGraph = () => {
  const data = [
    { name: "23%", students: 23 },
    { name: "29%", students: 29 },
    { name: "58%", students: 58 },
    { name: "75%", students: 75 },
    { name: "33%", students: 33 },
    { name: "20%", students: 20 },
    { name: "73%", students: 73 },
    { name: "49%", students: 49 },
  ];

  return (
    <AreaChart width={812} height={90} data={data}>
      <Area dataKey="students" fill="blue" stroke="white" />
      <CartesianGrid strokeOpacity={0} />
      <XAxis dataKey="name" fontSize="14px" tick={false} padding="2rem" />
      <YAxis axisLine={false} tick={false} />
    </AreaChart>
  );
};

export default ChartGraph;
