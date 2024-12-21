import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assignment_1", obtained_marks: 48, total_marks: 50 },
    { name: "Assignment_2", obtained_marks: 49, total_marks: 50 },
    { name: "Assignment_3", obtained_marks: 50, total_marks: 50 },
    { name: "Assignment_4", obtained_marks: 60, total_marks: 60 },
    { name: "Assignment_5", obtained_marks: 47, total_marks: 50 },
    { name: "Assignment_6", obtained_marks: 58, total_marks: 60 },
    { name: "Assignment_7", obtained_marks: 60, total_marks: 60 },
    { name: "Assignment_8", obtained_marks: 30, total_marks: 30 },
  ];
  return (
    <div className="my-container">
      <div>
        <h1 className="title-text text-3xl font-extrabold text-center mb-5">
          Assignment Marks
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <ComposedChart width={1000} height={300} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total_marks" />
          <Tooltip />
          <Legend />
          <Bar dataKey="obtained_marks" barSize={20} fill="#9873FF" />
          <Bar dataKey="total_marks" barSize={20} fill="#7E90FE" />
          <Line type="monotone" dataKey="obtained_marks" stroke="#ff7300" />
          <Line type="monotone" dataKey="total_marks" stroke="#22c55e" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
