import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const HomePage = () => {
  // Today's consumption and generation data
  const todayConsumption = 43.35;  // Replace with real data
  const todayGeneration = 20.01;   // Replace with real data

  const [currentConsumption, setCurrentConsumption] = useState(todayConsumption);
  const [currentGeneration, setCurrentGeneration] = useState(todayGeneration);

  const consumptionChartData = {
    labels: ["Today"],  // Just one label for today
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: [currentConsumption],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const generationChartData = {
    labels: ["Today"],  // Just one label for today
    datasets: [
      {
        label: "Solar Generation (kWh)",
        data: [currentGeneration],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Energy Data Overview (Today)",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.toFixed(2)} kWh`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day",
        },
      },
      y: {
        title: {
          display: true,
          text: "Energy (kWh)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Voltkon Energy Trading</h1>
          <nav className="flex space-x-4">
            <a href="/profile" className="hover:underline">
              Profile
            </a>
            <a href="/logout" className="hover:underline">
              Logout
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <aside className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboard"
                  className="block px-4 py-2 rounded-lg bg-green-100 hover:bg-green-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/analysis"
                  className="block px-4 py-2 rounded-lg hover:bg-green-200"
                >
                  Analysis
                </a>
              </li>
              <li>
                <a
                  href="/trades"
                  className="block px-4 py-2 rounded-lg hover:bg-green-200"
                >
                  Trades
                </a>
              </li>
            </ul>
          </aside>

          <section className="md:col-span-3 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Welcome to Voltkon</h2>

            <div className="flex justify-center gap-4 mb-4">
              <div className="bg-white shadow p-4 rounded-lg w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Energy Consumption</h3>
                <div style={{ height: "250px" }}>
                  <Line data={consumptionChartData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-white shadow p-4 rounded-lg w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Solar Generation</h3>
                <div style={{ height: "250px" }}>
                  <Line data={generationChartData} options={chartOptions} />
                </div>
              </div>
            </div>

            <div className="mb-2">
              <h3 className="text-lg font-bold mb-2">Today's Data</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-100 rounded-lg p-4">
                <h3 className="font-bold">Consumption</h3>
                <p className="text-2xl font-semibold mt-2">
                  {currentConsumption.toFixed(2)} kWh
                </p>
              </div>

              <div className="bg-green-100 rounded-lg p-4">
                <h3 className="font-bold">Generation</h3>
                <p className="text-2xl font-semibold mt-2">
                  {currentGeneration.toFixed(2)} kWh
                </p>
              </div>

              <div className="rounded-lg">
                {currentConsumption < currentGeneration ? (
                  <div className="bg-green-100 rounded-lg p-4">
                    <h3 className="font-bold">Energy Available</h3>
                    <p className="text-2xl font-semibold mt-2">
                      {(currentGeneration - currentConsumption).toFixed(2)} kWh
                      available
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-100 rounded-lg p-4">
                    <h3 className="font-bold">Energy Required</h3>
                    <p className="text-2xl font-semibold mt-2">
                      {(currentConsumption - currentGeneration).toFixed(2)} kWh
                      required
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
