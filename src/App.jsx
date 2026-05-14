import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right,#2563eb,#06b6d4)",
          padding: 30,
          borderRadius: 30,
          marginBottom: 20,
        }}
      >
        <h1>BRILink BukuKas</h1>
        <h2>Total Saldo</h2>
        <h1>Rp 8.500.000</h1>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h2>BRI Utama</h2>
        <h1>Rp 5.000.000</h1>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>DANA</h2>
        <h1>Rp 2.000.000</h1>
      </div>
    </div>
  );
}
