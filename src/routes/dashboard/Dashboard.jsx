import React from "react";
import Navbar from "../../components/adminNavbar/dashboardNavbar";
import "./Dashboard.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", revenue: 2100000 },
  { name: "Feb", revenue: 3000020 },
  { name: "Mar", revenue: 1025005 },
  { name: "Apr", revenue: 3101010 },
  { name: "May", revenue: 4000000 },
  { name: "Jun", revenue: 2020035 },
  { name: "Jul", revenue: 2225155 },
  { name: "Aug", revenue: 1215120 },
  { name: "Sep", revenue: 3222020 },
  { name: "Oct", revenue: 1556640 },
  { name: "Nov", revenue: 2000000 },
  { name: "Dec", revenue: 5000000 },
];

const totalRevenue = data.reduce((acc, cur) => acc + cur.revenue, 0);

const breakdownData = [
  { name: "Buy", value: 600000000 },
  { name: "Rent", value: 400010000 },
];

const COLORS = ["#ff9505", "#00aaff"];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
      <Navbar />
        <h1>Dashboard</h1>
        <div className="stats-container">
          <div className="stat-box">
            <h2>Properties for Sale</h2>
            <p>212</p>
          </div>
          <div className="stat-box">
            <h2>Properties for Rent</h2>
            <p>312</p>
          </div>
          <div className="stat-box">
            <h2>Total Clients</h2>
            <p>2134</p>
          </div>
          <div className="stat-box">
            <h2>Total Properties</h2>
            <p>524</p>
          </div>
        </div>
        <div className="charts-container">
          <div className="revenue-chart">
            <h3>Total Revenue</h3> 
            <p> { totalRevenue.toLocaleString()} Birr</p>
            <ResponsiveContainer width="60%" height={250}>
              {" "}
              {/* Reduced width and height */}
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#ff9505" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="revenue-breakdown">
            <h3>Revenue Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={breakdownData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {breakdownData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
