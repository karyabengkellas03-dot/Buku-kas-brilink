import React, { useState } from "react";

export default function App() {
  const [akun, setAkun] = useState([
    { nama: "BRI Utama", saldo: 5000000 },
    { nama: "Dana", saldo: 2000000 },
    { nama: "OVO", saldo: 1500000 },
  ]);

  const [jenisList, setJenisList] = useState([
    "Transfer",
    "Tarik Tunai",
    "Setor Tunai",
    "Pulsa",
    "Topup Ewallet",
  ]);

  const [filter, setFilter] = useState("Semua");

  const [transaksi, setTransaksi] = useState([]);

  const [jenisBaru, setJenisBaru] = useState("");

  const [form, setForm] = useState({
    jenis: "Transfer",
    nominal: "",
    akun: "BRI Utama",
    keterangan: "",
  });

  const totalSaldo = akun.reduce(
    (a, b) => a + b.saldo,
    0
  );

  const simpanTransaksi = () => {
    if (!form.nominal) return;

    const nominal = Number(form.nominal);

    const updateAkun = akun.map((item) => {
      if (item.nama === form.akun) {
        return {
          ...item,
          saldo: item.saldo - nominal,
        };
      }
      return item;
    });

    setAkun(updateAkun);

    setTransaksi([
      {
        ...form,
        nominal,
        tanggal: new Date().toLocaleString(),
      },
      ...transaksi,
    ]);

    setForm({
      jenis: "Transfer",
      nominal: "",
      akun: "BRI Utama",
      keterangan: "",
    });
  };

  const tambahJenis = () => {
    if (!jenisBaru) return;

    setJenisList([...jenisList, jenisBaru]);

    setJenisBaru("");
  };

  const transaksiFilter =
    filter === "Semua"
      ? transaksi
      : transaksi.filter(
          (item) => item.jenis === filter
        );

  return (
    <div
      style={{
        background: "#0b1220",
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
            "linear-gradient(135deg,#1d4ed8,#0ea5e9)",
          padding: 25,
          borderRadius: 30,
          marginBottom: 20,
        }}
      >
        <h1 style={{ fontSize: 45 }}>
          BRILink BukuKas
        </h1>

        <h2 style={{ marginTop: 30 }}>
          Total Saldo:
        </h2>

        <h1>
          Rp {totalSaldo.toLocaleString()}
        </h1>

        <button
          style={{
            marginTop: 20,
            background: "white",
            border: "none",
            padding: 15,
            borderRadius: 12,
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      {/* STATISTIK */}
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
            background: "#2563eb",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Total Transaksi</h3>

          <h1>{transaksi.length}</h1>
        </div>

        <div
          style={{
            background: "#16a34a",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <h3>Total Nominal</h3>

          <h1>
            Rp{" "}
            {transaksi
              .reduce((a, b) => a + b.nominal, 0)
              .toLocaleString()}
          </h1>
        </div>
      </div>

      {/* SALDO AKUN */}
      <div
        style={{
          background: "#111827",
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
              background: "#1f2937",
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

      {/* TAMBAH TRANSAKSI */}
      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Tambah Transaksi</h1>

        <select
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
            borderRadius: 12,
          }}
        >
          {jenisList.map((item, index) => (
            <option key={index}>
              {item}
            </option>
          ))}
        </select>

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
            borderRadius: 12,
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
            borderRadius: 12,
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
            borderRadius: 12,
          }}
        />

        <button
          onClick={simpanTransaksi}
          style={{
            width: "100%",
            padding: 18,
            marginTop: 20,
            border: "none",
            borderRadius: 15,
            background: "#2563eb",
            color: "white",
            fontSize: 18,
          }}
        >
          Simpan Transaksi
        </button>
      </div>

      {/* TAMBAH JENIS */}
      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Tambah Jenis Transaksi</h1>

        <input
          placeholder="Jenis transaksi baru"
          value={jenisBaru}
          onChange={(e) =>
            setJenisBaru(e.target.value)
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 12,
          }}
        />

        <button
          onClick={tambahJenis}
          style={{
            width: "100%",
            padding: 18,
            marginTop: 20,
            border: "none",
            borderRadius: 15,
            background: "#22c55e",
            color: "white",
          }}
        >
          Tambah Jenis
        </button>
      </div>

      {/* FILTER */}
      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Filter Transaksi</h1>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          style={{
            width: "100%",
            padding: 15,
            marginTop: 15,
            borderRadius: 12,
          }}
        >
          <option>Semua</option>

          {jenisList.map((item, index) => (
            <option key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* RIWAYAT */}
      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 25,
        }}
      >
        <h1>Riwayat Transaksi</h1>

        {transaksiFilter.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
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
