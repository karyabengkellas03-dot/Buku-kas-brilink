import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        paddingBottom: 80,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(to right,#2563eb,#06b6d4)",
          padding: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <h1>BRILink BukuKas</h1>
        <h2>Total Saldo</h2>
        <h1>Rp 8.500.000</h1>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div style={{ padding: 20 }}>
          <Card title="BRI Utama" saldo="Rp 5.000.000" />
          <Card title="DANA" saldo="Rp 2.000.000" />
        </div>
      )}

      {/* TRANSAKSI */}
      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h1>Riwayat Transaksi</h1>

          <Box>
            <h2>Transfer</h2>
            <p>BRI → DANA</p>
            <h2 style={{ color: "#22c55e" }}>+ Rp 500.000</h2>
          </Box>

          <Box>
            <h2>Tarik Tunai</h2>
            <p>BRI Utama</p>
            <h2 style={{ color: "#ef4444" }}>- Rp 200.000</h2>
          </Box>
        </div>
      )}

      {/* TAMBAH */}
      {page === "tambah" && (
        <div style={{ padding: 20 }}>
          <h1>Tambah Transaksi</h1>

          <Box>
            <input style={input} placeholder="Nominal" />

            <select style={input}>
              <option>Pilih Jenis</option>
              <option>Transfer</option>
              <option>Pulsa</option>
              <option>Token PLN</option>
            </select>

            <button style={button}>Simpan</button>
          </Box>
        </div>
      )}

      {/* LAPORAN */}
      {page === "laporan" && (
        <div style={{ padding: 20 }}>
          <h1>Laporan</h1>

          <Box>
            <h2>Pemasukan</h2>
            <h1 style={{ color: "#22c55e" }}>Rp 10.000.000</h1>
          </Box>

          <Box>
            <h2>Pengeluaran</h2>
            <h1 style={{ color: "#ef4444" }}>Rp 2.000.000</h1>
          </Box>
        </div>
      )}

      {/* AKUN */}
      {page === "akun" && (
        <div style={{ padding: 20 }}>
          <h1>Akun</h1>

          <Box>
            <p>Nama: Sel Rafasya</p>
            <p>Email: admin@gmail.com</p>

            <button
              style={{
                ...button,
                background: "#ef4444",
              }}
            >
              Logout
            </button>
          </Box>
        </div>
      )}

      {/* MENU */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#111827",
          display: "flex",
          padding: 10,
        }}
      >
        <Menu text="Home" click={() => setPage("home")} />
        <Menu text="Transaksi" click={() => setPage("transaksi")} />
        <Menu text="Tambah" click={() => setPage("tambah")} />
        <Menu text="Laporan" click={() => setPage("laporan")} />
        <Menu text="Akun" click={() => setPage("akun")} />
      </div>
    </div>
  );
}

function Card({ title, saldo }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
      }}
    >
      <h2>{title}</h2>
      <h1>{saldo}</h1>
    </div>
  );
}

function Box({ children }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

function Menu({ text, click }) {
  return (
    <button
      onClick={click}
      style={{
        flex: 1,
        margin: 5,
        padding: 12,
        border: "none",
        borderRadius: 10,
        background: "#2563eb",
        color: "white",
      }}
    >
      {text}
    </button>
  );
}

const input = {
  width: "100%",
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  border: "none",
};

const button = {
  width: "100%",
  padding: 15,
  border: "none",
  borderRadius: 10,
  background: "#2563eb",
  color: "white",
};
