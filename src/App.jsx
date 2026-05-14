import { useState } from "react";

export default function App() {
  const [transaksi, setTransaksi] = useState([]);
  const [form, setForm] = useState({
    tanggal: "",
    jenis: "",
    nominal: "",
    keterangan: "",
  });

  const tambahTransaksi = () => {
    if (!form.jenis || !form.nominal) {
      alert("Lengkapi data");
      return;
    }

    setTransaksi([
      ...transaksi,
      {
        ...form,
      },
    ]);

    setForm({
      tanggal: "",
      jenis: "",
      nominal: "",
      keterangan: "",
    });
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>RAFASYA CELL</h1>

      <div
        style={{
          background: "white",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <h3>Input Transaksi</h3>

        <input
          placeholder="Tanggal"
          value={form.tanggal}
          onChange={(e) =>
            setForm({ ...form, tanggal: e.target.value })
          }
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <select
          value={form.jenis}
          onChange={(e) =>
            setForm({ ...form, jenis: e.target.value })
          }
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        >
          <option value="">Pilih Jenis</option>
          <option>Transfer</option>
          <option>Tarik Tunai</option>
          <option>Setor Tunai</option>
          <option>Pulsa</option>
        </select>

        <input
          placeholder="Nominal"
          value={form.nominal}
          onChange={(e) =>
            setForm({ ...form, nominal: e.target.value })
          }
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) =>
            setForm({ ...form, keterangan: e.target.value })
          }
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <button
          onClick={tambahTransaksi}
          style={{
            width: "100%",
            padding: 12,
            background: "green",
            color: "white",
            border: "none",
            borderRadius: 8,
          }}
        >
          Simpan Transaksi
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <h3>Data Transaksi</h3>

        {transaksi.length === 0 ? (
          <p>Belum ada transaksi</p>
        ) : (
          transaksi.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <p><b>Tanggal:</b> {item.tanggal}</p>
              <p><b>Jenis:</b> {item.jenis}</p>
              <p><b>Nominal:</b> {item.nominal}</p>
              <p><b>Keterangan:</b> {item.keterangan}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
        }
