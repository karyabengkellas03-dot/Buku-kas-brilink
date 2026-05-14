import React, { useState } from "react";

export default function App() {
  // DATA AKUN
  const [akun, setAkun] = useState([
    {
      nama: "BRI Utama",
      saldo: 5000000,
    },
    {
      nama: "Dana",
      saldo: 2000000,
    },
    {
      nama: "OVO",
      saldo: 1500000,
    },
  ]);

  // DATA TRANSAKSI
  const [transaksi, setTransaksi] =
    useState([]);

  // FORM
  const [form, setForm] = useState({
    tipe: "Transfer",
    nominal: "",
    akunSumber: "BRI Utama",
    rekeningPenampung: "Dana",
    keterangan: "",
  });

  // SIMPAN TRANSAKSI
  const simpanTransaksi = () => {
    if (!form.nominal) {
      alert("Masukkan nominal");
      return;
    }

    const nominal = parseInt(
      form.nominal
    );

    // UPDATE SALDO
    const updateSaldo = akun.map(
      (item) => {
        // AKUN SUMBER BERKURANG
        if (
          item.nama === form.akunSumber
        ) {
          return {
            ...item,
            saldo: item.saldo - nominal,
          };
        }

        // REKENING PENAMPUNG BERTAMBAH
        if (
          item.nama ===
          form.rekeningPenampung
        ) {
          return {
            ...item,
            saldo: item.saldo + nominal,
          };
        }

        return item;
      }
    );

    setAkun(updateSaldo);

    // SIMPAN RIWAYAT
    setTransaksi([
      {
        ...form,
        nominal,
        tanggal:
          new Date().toLocaleString(),
      },
      ...transaksi,
    ]);

    // RESET FORM
    setForm({
      tipe: "Transfer",
      nominal: "",
      akunSumber: akun[0].nama,
      rekeningPenampung:
        akun[1].nama,
      keterangan: "",
    });
  };

  // TOTAL SALDO
  const totalSaldo = akun.reduce(
    (a, b) => a + b.saldo,
    0
  );

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
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4)",
          padding: 25,
          borderRadius: 30,
          marginBottom: 20,
        }}
      >
        <h1
          style={{
            fontSize: 40,
          }}
        >
          BRILink BukuKas
        </h1>

        <h2>Total Saldo</h2>

        <h1>
          Rp{" "}
          {totalSaldo.toLocaleString()}
        </h1>
      </div>

      {/* SALDO AKUN */}
      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Saldo Akun</h1>

        {akun.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#334155",
              padding: 20,
              borderRadius: 20,
              marginTop: 15,
            }}
          >
            <h2>{item.nama}</h2>

            <h3>
              Rp{" "}
              {item.saldo.toLocaleString()}
            </h3>
          </div>
        ))}
      </div>

      {/* FORM TRANSAKSI */}
      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Transfer Saldo</h1>

        {/* NOMINAL */}
        <input
          type="number"
          placeholder="Nominal"
          value={form.nominal}
          onChange={(e) =>
            setForm({
              ...form,
              nominal: e.target.value,
            })
          }
          style={inputStyle}
        />

        {/* AKUN SUMBER */}
        <select
          value={form.akunSumber}
          onChange={(e) =>
            setForm({
              ...form,
              akunSumber:
                e.target.value,
            })
          }
          style={inputStyle}
        >
          {akun.map((item, index) => (
            <option key={index}>
              {item.nama}
            </option>
          ))}
        </select>

        {/* REKENING PENAMPUNG */}
        <select
          value={
            form.rekeningPenampung
          }
          onChange={(e) =>
            setForm({
              ...form,
              rekeningPenampung:
                e.target.value,
            })
          }
          style={inputStyle}
        >
          {akun.map((item, index) => (
            <option key={index}>
              {item.nama}
            </option>
          ))}
        </select>

        {/* KETERANGAN */}
        <input
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) =>
            setForm({
              ...form,
              keterangan:
                e.target.value,
            })
          }
          style={inputStyle}
        />

        {/* BUTTON */}
        <button
          onClick={simpanTransaksi}
          style={{
            width: "100%",
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: 18,
            marginTop: 20,
            borderRadius: 12,
            fontSize: 18,
          }}
        >
          Simpan Transaksi
        </button>
      </div>

      {/* RIWAYAT */}
      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 25,
        }}
      >
        <h1>Riwayat Transaksi</h1>

        {transaksi.map(
          (item, index) => (
            <div
              key={index}
              style={{
                background:
                  "#334155",
                padding: 20,
                borderRadius: 20,
                marginTop: 15,
              }}
            >
              <h2>
                Transfer Saldo
              </h2>

              <h3>
                Rp{" "}
                {item.nominal.toLocaleString()}
              </h3>

              <p>
                Dari:
                {" "}
                {item.akunSumber}
              </p>

              <p>
                Ke:
                {" "}
                {
                  item.rekeningPenampung
                }
              </p>

              <p>
                Keterangan:
                {" "}
                {item.keterangan}
              </p>

              <small>
                {item.tanggal}
              </small>
            </div>
          )
        )}
      </div>
    </div>
  );
}

// STYLE INPUT
const inputStyle = {
  width: "100%",
  padding: 15,
  marginTop: 15,
  borderRadius: 10,
  border: "none",
  fontSize: 16,
};
