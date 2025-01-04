import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { chartData } from "../assets/data";

const Chart = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Màu sắc cho các phần của biểu đồ

  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="total" // Giá trị dùng để xác định kích thước phần tròn
          nameKey="name" // Nhãn hiển thị
          cx="50%" // Vị trí tâm trên trục X
          cy="50%" // Vị trí tâm trên trục Y
          outerRadius={150} // Bán kính ngoài của Pie
          fill="#8884d8"
          label // Hiển thị nhãn trên Pie
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
