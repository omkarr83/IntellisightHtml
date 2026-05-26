import React, { useState } from "react";

const KPITable = () => {
  // Sample JSON data
  const [kpiData, setKPI] = useState([
    {
      id: 1,
      disc_data: "Water Consumption",
      unit: "kwh",
      baseline: "12",
      target: 0,
      plannedDelta: 0,
      mainKPI: "Coke",
      mainKPIUnit: "Kg/Thm",
      impactOnKPI: 1,
      emissionFactor: 3.17,
      expectedCO2Savings: 3.1716667,
    },
    {
      id: 2,
      disc_data: "CO₂ Reduction",
      unit: "kg CO₂/tcs",
      baseline: 20,
      target: 0.005,
      plannedDelta: 0,
      mainKPI: "Coke",
      mainKPIUnit: "Kg/Thm",
      impactOnKPI: 1,
      emissionFactor: 3.17,
      expectedCO2Savings: 3.1716667,

    },
    {
      id: 3,
      disc_data: "Energy Consumption",
      unit: "kWh/tcs",
      baseline: 50,
      target: 0.004,
      plannedDelta: 0,
      mainKPI: "Text",
      mainKPIUnit: "Kg/Thm",
      impactOnKPI: 1,
      emissionFactor: 5.17,
      expectedCO2Savings: 3.1716667,
    },
    {
      id: 4,
      disc_data: "Water Change",
      unit: "m³/tcs",
      baseline: "-",
      target: 0.8,
      plannedDelta: 0.5,
      mainKPI: "Text",
      mainKPIUnit: "Kg/Thm",
      impactOnKPI: 1,
      emissionFactor: 3.17,
      expectedCO2Savings: 3.1716667,
    },
   
     {
      id: 5,
      disc_data: "H₂SO₄ Addition",
      unit: "kg H₂SO₄/tcs",
      baseline: "-",
      target: "-",
      plannedDelta: "-",
      mainKPI: "Text",
      mainKPIUnit: "Kg/Thm",
      impactOnKPI: 1,
      emissionFactor: 3.17,
      expectedCO2Savings: 5.1716667,
    },
     {
      id: 6,
      disc_data: "H₂SO₄ Addition",
      unit: "kg H₂SO₄/tcs",
      baseline: "-",
      target: "-",
      plannedDelta: "-",
      mainKPI: "Coke",
      mainKPIUnit: " ",
      impactOnKPI: 1,
      emissionFactor: 5.17,
      expectedCO2Savings: 4.2654,
    }
  ]);

  // Delete milestone
  const deleteMilestone = (id) => {
    setKPI((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="table-responsive" id="kpi_table_div">
      <table className="table table-bordered align-middle" id="kpi_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1">KPI Description</th>
            <th className="heading_2">Unit</th>
            <th className="heading_3">Baseline</th>
            <th className="heading_4">Target</th>
            <th className="heading_5">Planned Delta</th>
            <th className="heading_6">Main KPI</th>
            <th className="heading_7">Main KPI Unit</th>
            <th className="heading_8">Impact on main KPI</th>
            <th className="heading_9">Emission Factor</th>
            <th className="heading_10">Expected CO2 Savings</th>
            <th className="heading_11">Action</th>
          </tr>
        </thead>
        <tbody>
          {kpiData.map((kpi) => (
            <tr key={kpi.id}>
              <td className="text-grey">{kpi.disc_data}</td>
              <td>{kpi.unit}</td>
              <td>{kpi.baseline}</td>
              <td>{kpi.target}</td>
              <td>{kpi.plannedDelta}</td>
              <td>{kpi.mainKPI}</td>
              <td>{kpi.mainKPIUnit}</td>
              <td>{kpi.impactOnKPI}</td>
              <td>{kpi.emissionFactor}</td>
              <td>{kpi.expectedCO2Savings}</td>
              <td>
                <button className="btn btn-sm btn-link text-primary me-2">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-sm btn-link text-danger" onClick={() => deleteMilestone(kpi.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
