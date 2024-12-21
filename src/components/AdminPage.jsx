import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminPage.css";
import "../styles/OverviewAdminPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

const Overview = () => {
  const data = [
    { title: "Total Sales", amount: "9999$", icon: "💰" },
    { title: "Expenses", amount: "2500$", icon: "💸" },
    { title: "Shoes on Sale", amount: "150", icon: "👟" },
    { title: "Invoices", amount: "5", icon: "📜" },
  ];

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h3>
            {item.icon} {item.title}
          </h3>
          <p className="amount">{item.amount}</p>
        </div>
      ))}
    </div>
  );
};

const SalesOverview = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales Over Time",
            data: [500, 1000, 1500, 2000, 2500, 3000],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Sales Overview",
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-box">
      <canvas ref={canvasRef} width="400" height="400"></canvas>
    </div>
  );
};

const ExpensesOverview = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Monthly Expenses",
            data: [400, 500, 600, 800, 700, 750],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Expenses Overview",
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-box">
      <canvas ref={canvasRef} width="400" height="400"></canvas>
    </div>
  );
};

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="admin-page">
      <div
        className={`overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div className="headerr">
        <span className="panel" onClick={toggleSidebar}>
          ☰
        </span>
        <span
          className={`icon-close ${isSidebarOpen ? "show" : ""}`}
          onClick={toggleSidebar}
        >
          
        </span>
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>
        <span className="icon">👤</span>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/admin">Overview</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/external">External</Link>
          </li>
        </ul>
      </div>

      <div className={`content ${isSidebarOpen ? "shift" : ""}`}>
        <h1>Welcome to Admin Panel</h1>
        <Overview />
        <div className="charts-container">
          <SalesOverview />
          <ExpensesOverview />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
