import { useState, useEffect } from "react";

export default function App() {
  const [saldo, setSaldo] = useState(0);

  const [form, setForm] = useState({
    tanggal: "",
    jenis: "Transfer",
    nominal: "",
    keterangan: "",
  });

  const [transaksi, setTransaksi] = useState(() => {
    const data = localStorage.getItem("transaksi");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("transaksi", JSON.stringify(transaksi));

    let total = 0;

    transaksi.forEach((item) => {
      total += Number(item.nominal);
    });

    setSaldo(total);
  }, [transaksi]);

  const simpanTransaksi = () => {
    if (!form.nominal) {
      alert("Nominal wajib diisi");
      return;
    }

    const dataBaru = {
      id: Date.now(),
      tanggal: form.tanggal || new Date().toLocaleDateString(),
      jenis: form.jenis,
      nominal: form.nominal,
      keterangan: form.keterangan,
    };

    setTransaksi([dataBaru, ...transaksi]);

    setForm({
      tanggal: "",
      jenis: "Transfer",
      nominal: "",
      keterangan: "",
    });
  };

  const hapusTransaksi = (id) => {
    const hasil = transaksi.filter((item) => item.id !== id);
    setTransaksi(hasil);
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
      <h1 style={{ fontSize: 40 }}>Sel Rafasya</h1>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Saldo Saat Ini</h2>

        <h1 style={{ color: "green" }}>
          Rp {saldo.toLocaleString("id-ID")}
        </h1>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Input Transaksi</h2>

        <input
          type="date"
          value={form.tanggal}
          onChange={(e) =>
            setForm({ ...form, tanggal: e.target.value })
          }
          style={inputStyle}
        />

        <select
          value={form.jenis}
          onChange={(e) =>
            setForm({ ...form, jenis: e.target.value })
          }
          style={inputStyle}
        >
          <option>Transfer</option>
          <option>Tarik Tunai</option>
          <option>Setor Tunai</option>
          <option>Pulsa</option>
          <option>Token PLN</option>
        </select>

        <input
          type="number"
          placeholder="Nominal"
          value={form.nominal}
          onChange={(e) =>
            setForm({ ...form, nominal: e.target.value })
          }
          style={inputStyle}
        />

        <input
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) =>
            setForm({ ...form, keterangan: e.target.value })
          }
          style={inputStyle}
        />

        <button
          onClick={simpanTransaksi}
          style={{
            width: "100%",
            padding: 15,
            background: "green",
            color: "white",
            border: "none",
            borderRadius: 10,
            fontSize: 18,
            marginTop: 10,
          }}
        >
          Simpan Transaksi
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Riwayat Transaksi</h2>

        {transaksi.length === 0 && <p>Belum ada transaksi</p>}

        {transaksi.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <p>
              <b>Tanggal:</b> {item.tanggal}
            </p>

            <p>
              <b>Jenis:</b> {item.jenis}
            </p>

            <p>
              <b>Nominal:</b> Rp{" "}
              {Number(item.nominal).toLocaleString("id-ID")}
            </p>

            <p>
              <b>Keterangan:</b> {item.keterangan}
            </p>

            <button
              onClick={() => hapusTransaksi(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 15,
  marginTop: 10,
  borderRadius: 10,
  border: "1px solid #ccc",
  fontSize: 16,
  boxSizing: "border-box",
};
