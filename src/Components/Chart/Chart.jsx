import React from "react";
import { Doughnut  } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  
  const barChart = confirmed ? (
    <Doughnut 
      data={{
        labels: ["Infected", "Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(242, 234, 0, 0.5)",
            ],
            hoverBackgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
            data: [
              confirmed.value,
              recovered.value,
              deaths.value,
              confirmed.value - (recovered.value + deaths.value),
            ],
          },
        ],
      }}
      options={{
        legend: { display: true }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{barChart}</div>
  );
};

export default Chart;
