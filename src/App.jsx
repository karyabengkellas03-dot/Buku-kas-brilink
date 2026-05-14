import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const menuButton = (id, label) => (
    <button
      onClick={() => setPage(id)}
      style={{
        flex: 1,
        padding: 12,
        background: page === id ? "#2563eb" : "#111827",
        color: "white",
        border: "none",
        borderRadius: 10,
        margin: 4,
        fontSize: 12,
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        paddingBottom: 90,
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: 25,
          background: "linear-gradient(to right,#2563eb,#06b6d4)",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <h1 style={{ fontSize: 42 }}>BRILink BukuKas</h1>
        <h2>Total Saldo</h2>
        <h1>Rp 8.500.000</h1>
      </div>

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <div style={{ padding: 20 }}>
          <h1>Saldo Akun</h1>

          <div style={card}>
            <h2>BRI Utama</h2>
            <h3>Rp 5.000.000</h3>
          </div>

          <div style={card}>
            <h2>DANA</h2>
            <h3>Rp 2.000.000</h3>
          </div>

          <div style={card}>
            <h2>OVO</h2>
            <h3>Rp 1.500.000</h3>
          </div>
        </div>
      )}

      {/* TRANSAKSI */}
      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h1>Riwayat Transaksi</h1>

          <div style={card}>
            <h2>Transfer Masuk</h2>
            <p>BRI → DANA</p>
            <h2 style={{ color: "#22c55e" }}>+ Rp 500.000</h2>
          </div>

          <div style={card}>
            <h2>Tarik Tunai</h2>
            <p>BRI Utama</p>
            <h2 style={{ color: "#ef4444" }}>- Rp 200.000</h2>
          </div>
        </div>
      )}

      {/* TAMBAH */}
      {page === "tambah" && (
        <div style={{ padding: 20 }}>
          <h1>Tambah Transaksi</h1>

          <div style={card}>
            <input placeholder="Nominal" style={input} />

            <select style={input}>
              <option>Transfer</option>
              <option>Setor Tunai</option>
              <option>Pulsa</option>
              <option>Token PLN</option>
            </select>

            <select style={input}>
              <option>BRI Utama</option>
              <option>DANA</option>
              <option>OVO</option>
            </select>

            <select style={input}>
              <option>BRI Penampung</option>
              <option>Mandiri</option>
            </select>

            <textarea
              placeholder="Keterangan"
              style={{
                ...input,
                height: 100,
              }}
            />

            <button
              style={{
                width: "100%",
                padding: 15,
                border: "none",
                borderRadius: 12,
                background: "#2563eb",
                color: "white",
                fontSize: 18,
              }}
            >
              Simpan Transaksi
            </button>
          </div>
        </div>
      )}

      {/* LAPORAN */}
      {page === "laporan" && (
        <div style={{ padding: 20 }}>
          <h1>Laporan</h1>

          <div style={card}>
            <h2>Total Pemasukan</h2>
            <h1 style={{ color: "#22c55e" }}>Rp 10.000.000</h1>
          </div>

          <div style={card}>
            <h2>Total Pengeluaran</h2>
            <h1 style={{ color: "#ef4444" }}>Rp 2.000.000</h1>
          </div>

          <div style={card}>
            <h2>Laba Bersih</h2>
            <h1>Rp 8.000.000</h1>
          </div>
        </div>
      )}

      {/* AKUN */}
      {page === "akun" && (
        <div style={{ padding: 20 }}>
          <h1>Akun</h1>

          <div style={card}>
            <h2>Nama</h2>
            <p>Sel Rafasya</p>

            <h2>Email</h2>
            <p>admin@gmail.com</p>

            <button
              style={{
                width: "100%",
                padding: 15,
                border: "none",
                borderRadius: 12,
                background: "#ef4444",
                color: "white",
                fontSize: 18,
                marginTop: 20,
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* MENU BAWAH */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          background: "#0f172a",
          padding: 10,
        }}
      >
        {menuButton("dashboard", "Dashboard")}
        {menuButton("transaksi", "Transaksi")}
        {menuButton("tambah", "Tambah")}
        {menuButton("laporan", "Laporan")}
        {menuButton("akun", "Akun")}
      </div>
    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: 20,
  borderRadius: 20,
  marginBottom: 20,
};

const input = {
  width: "100%",
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  border: "none",
  fontSize: 16,
};
