import React, { useState } from "react";

export default function App() {
  const [akun, setAkun] = useState([
    {
      nama: "BRI Utama",
      saldo: 5000000,
    },
    {
      nama: "Dana",
      saldo: 2000000,
    },
  ]);

  const [transaksi, setTransaksi] = useState([]);

  const [form, setForm] = useState({
    tipe: "Pemasukan",
    jenis: "Transfer",
    nominal: "",
    akun: "BRI Utama",
    keterangan: "",
  });

  const simpanTransaksi = () => {
    if (!form.nominal) return;

    const nominal = Number(form.nominal);

    const updateSaldo = akun.map((item) => {
      if (item.nama === form.akun) {
        return {
          ...item,
          saldo:
            form.tipe === "Pemasukan"
              ? item.saldo + nominal
              : item.saldo - nominal,
        };
      }

      return item;
    });

    setAkun(updateSaldo);

    setTransaksi([
      {
        ...form,
        nominal,
        tanggal: new Date().toLocaleString(),
      },
      ...transaksi,
    ]);

    setForm({
      tipe: "Pemasukan",
      jenis: "Transfer",
      nominal: "",
      akun: "BRI Utama",
      keterangan: "",
    });
  };

  const totalSaldo = akun.reduce(
    (a, b) => a + b.saldo,
    0
  );

  const totalPemasukan = transaksi
    .filter((item) => item.tipe === "Pemasukan")
    .reduce((a, b) => a + b.nominal, 0);

  const totalPengeluaran = transaksi
    .filter((item) => item.tipe === "Pengeluaran")
    .reduce((a, b) => a + b.nominal, 0);

  const labaBersih =
    totalPemasukan - totalPengeluaran;

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
        <h1 style={{ fontSize: 40 }}>
          BRILink BukuKas
        </h1>

        <h2>Total Saldo</h2>

        <h1>
          Rp {totalSaldo.toLocaleString()}
        </h1>
      </div>

      {/* DASHBOARD */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 15,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            background: "#16a34a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Pemasukan</h3>

          <h2>
            Rp{" "}
            {totalPemasukan.toLocaleString()}
          </h2>
        </div>

        <div
          style={{
            background: "#dc2626",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Pengeluaran</h3>

          <h2>
            Rp{" "}
            {totalPengeluaran.toLocaleString()}
          </h2>
        </div>

        <div
          style={{
            background: "#2563eb",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Laba Bersih</h3>

          <h2>
            Rp {labaBersih.toLocaleString()}
          </h2>
        </div>

        <div
          style={{
            background: "#9333ea",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Total Transaksi</h3>

          <h2>{transaksi.length}</h2>
        </div>
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
              Rp {item.saldo.toLocaleString()}
            </h3>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Tambah Transaksi</h1>

        <select
          value={form.tipe}
          onChange={(e) =>
            setForm({
              ...form,
              tipe: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        >
          <option>Pemasukan</option>
          <option>Pengeluaran</option>
        </select>

        <input
          placeholder="Jenis transaksi"
          value={form.jenis}
          onChange={(e) =>
            setForm({
              ...form,
              jenis: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        />

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
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        />

        <select
          value={form.akun}
          onChange={(e) =>
            setForm({
              ...form,
              akun: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        >
          {akun.map((item, index) => (
            <option key={index}>
              {item.nama}
            </option>
          ))}
        </select>

        <input
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) =>
            setForm({
              ...form,
              keterangan: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
          }}
        />

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

        {transaksi.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#334155",
              padding: 20,
              borderRadius: 20,
              marginTop: 15,
            }}
          >
            <h2>{item.jenis}</h2>

            <h3>
              Rp{" "}
              {item.nominal.toLocaleString()}
            </h3>

            <p>Tipe: {item.tipe}</p>

            <p>Akun: {item.akun}</p>

            <p>
              Keterangan:
              {item.keterangan}
            </p>

            <small>{item.tanggal}</small>
          </div>
        ))}
      </div>
    </div>
  );
      }
