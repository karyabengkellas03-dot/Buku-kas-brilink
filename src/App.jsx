import React, { useState } from "react";

export default function App() {
  const [saldo, setSaldo] = useState(5000000);

  const [nominal, setNominal] = useState("");

  const [riwayat, setRiwayat] = useState([]);

  const simpanTransaksi = () => {
    if (!nominal) return;

    const angka = Number(nominal);

    setSaldo(saldo - angka);

    setRiwayat([
      {
        nominal: angka,
        tanggal: new Date().toLocaleString(),
      },
      ...riwayat,
    ]);

    setNominal("");
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: 20,
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4)",
          padding: 25,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1 style={{ fontSize: 40 }}>
          Sel Rafasya
        </h1>

        <h2>
          Total Saldo: Rp{" "}
          {saldo.toLocaleString()}
        </h2>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h1>Tambah Transaksi</h1>

        <input
          type="number"
          placeholder="Nominal"
          value={nominal}
          onChange={(e) =>
            setNominal(e.target.value)
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
            border: "none",
          }}
        />

        <button
          onClick={simpanTransaksi}
          style={{
            width: "100%",
            padding: 15,
            marginTop: 20,
            borderRadius: 10,
            border: "none",
            background: "#22c55e",
            color: "white",
            fontSize: 18,
          }}
        >
          Simpan Transaksi
        </button>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h1>Riwayat Transaksi</h1>

        {riwayat.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#334155",
              padding: 15,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <h3>
              Rp {item.nominal.toLocaleString()}
            </h3>

            <p>{item.tanggal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
