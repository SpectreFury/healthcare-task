import { useState } from "react";
import styles from "./Activity.module.css";
import ReactApexChart from "react-apexcharts";

const Activity = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Appointments",
        data: [2, 1, 3, 4, 2, 1, 3], // Monday to Sunday
      },
    ],
    options: {
      chart: {
        height: 200,
        type: "bar" as const,
        toolbar: {
          show: false, // Hides the download and other toolbar buttons
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "25%", // Make bars much thinner
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        labels: {
          style: {
            colors: [
              "#888888",
              "#888888",
              "#888888",
              "#888888",
              "#888888",
              "#888888",
              "#888888",
            ],
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        lines: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
    },
  });

  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h1 className={styles.title}>Activity</h1>
        <p className={styles.paragraph}>3 appointments on this week</p>
      </div>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={200}
        />
      </div>
    </div>
  );
};

export default Activity;
