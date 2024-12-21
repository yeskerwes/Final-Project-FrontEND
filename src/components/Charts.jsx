// src/components/AdminPage.jsx
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import "../styles/AdminPage.css"; // Стили для лейаута

// Регистрируем Chart.js модули
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

// --- AdminPage компонент ---
const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="admin-page">
      {/* Оверлей для закрытия бокового меню */}
      <div
        className={`overlay ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Хедер */}
      <div className="headerr">
        <span className="panel" onClick={toggleSidebar}>
          ☰
        </span>
        <span
          className={`icon-close ${isSidebarOpen ? "show" : ""}`}
          onClick={toggleSidebar}
        >
          ✖
        </span>
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>
        <span className="icon">👤</span>
      </div>

      {/* Боковое меню */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/admin">Overview</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/admin/data">Data</Link>
          </li>
          <li>
            <Link to="/admin/pages">Pages</Link>
          </li>
          <li>
            <Link to="/admin/external">External</Link>
          </li>
        </ul>
      </div>

      {/* Контент страницы */}
      <div className="content">
        <Routes>
          <Route path="/admin" element={<Overview />} />
          <Route path="/admin/charts" element={<Charts />} />
          {/* Здесь можно добавить другие маршруты для страниц */}
        </Routes>
      </div>
    </div>
  );
};

// --- Overview компонент (по умолчанию для /admin) ---
const Overview = () => {
  return (
    <div>
      <h1>Admin Overview</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
};

// --- Charts компонент ---
const Charts = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 90, 200],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Visitors",
        data: [300, 400, 350, 500, 450],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="charts-page">
      <h1>Charts Dashboard</h1>
      <div className="chart">
        <h3>Bar Chart</h3>
        <Bar data={barData} />
      </div>
      <div className="chart">
        <h3>Line Chart</h3>
        <Line data={lineData} />
      </div>
      <div className="chart">
        <h3>Pie Chart</h3>
        <Pie data={pieData} />
      </div>
      <div className="chart">
        <h3>Doughnut Chart</h3>
        <Doughnut data={pieData} />
      </div>
    </div>
  );
};

export default AdminPage;
