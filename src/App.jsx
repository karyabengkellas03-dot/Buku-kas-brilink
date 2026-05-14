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
        paddingBottom: 90,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background:
            "linear-gradient(to right,#2563eb,#06b6d4)",
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
          <h1>Dashboard Saldo</h1>

          {/* TAMBAH AKUN */}
          <div
            style={{
              background: "#1e293b",
              padding: 20,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <h2>Tambah Akun Bank</h2>

            <input
              placeholder="Nama Akun Baru"
              style={input}
            />

            <input
              type="number"
              placeholder="Saldo Awal"
              style={input}
            />

            <button style={button}>
              Tambah Akun
            </button>
          </div>

          {/* EDIT AKUN */}
          <div
            style={{
              background: "#1e293b",
              padding: 20,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <h2>
              Edit Nama &
              Tambah Saldo
            </h2>

            <select style={input}>
              <option>
                Pilih Akun
              </option>

              <option>
                BRI Utama
              </option>

              <option>
                DANA
              </option>

              <option>OVO</option>
            </select>

            <input
              placeholder="Edit Nama Akun"
              style={input}
            />

            <input
              type="number"
              placeholder="Tambah Saldo"
              style={input}
            />

            <button style={button}>
              Simpan
              Perubahan
            </button>
          </div>

          {/* LIST AKUN */}
          <Card
            title="BRI Utama"
            saldo="Rp 5.000.000"
          />

          <Card
            title="DANA"
            saldo="Rp 2.000.000"
          />

          <Card
            title="OVO"
            saldo="Rp 1.500.000"
          />
        </div>
      )}

      {/* TRANSAKSI */}
      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h1>Riwayat Transaksi</h1>

          <Box>
            <h2>Transfer</h2>

            <p>BRI → DANA</p>

            <h2
              style={{
                color: "#22c55e",
              }}
            >
              + Rp 500.000
            </h2>
          </Box>

          <Box>
            <h2>Tarik Tunai</h2>

            <p>BRI Utama</p>

            <h2
              style={{
                color: "#ef4444",
              }}
            >
              - Rp 200.000
            </h2>
          </Box>
        </div>
      )}

      {/* TAMBAH */}
      {page === "tambah" && (
        <div style={{ padding: 20 }}>
          <h1>Input Transaksi</h1>

          <Box>
            {/* JENIS */}
            <select style={input}>
              <option>
                Pilih Jenis
                Transaksi
              </option>

              <option>
                Transfer
              </option>

              <option>
                Tarik Tunai
              </option>

              <option>
                Setor Tunai
              </option>

              <option>
                Pulsa
              </option>

              <option>
                Token PLN
              </option>
            </select>

            {/* NOMINAL */}
            <input
              type="number"
              placeholder="Nominal"
              style={input}
            />

            {/* SUMBER */}
            <select style={input}>
              <option>
                Pilih Sumber
                Saldo
              </option>

              <option>
                BRI Utama
              </option>

              <option>DANA</option>

              <option>OVO</option>
            </select>

            {/* PENAMPUNG */}
            <select style={input}>
              <option>
                Rekening
                Penampung
              </option>

              <option>
                BRI Penampung
              </option>

              <option>
                Mandiri
              </option>

              <option>BCA</option>
            </select>

            {/* ADMIN */}
            <select style={input}>
              <option>
                Admin Masuk Ke
                Mana
              </option>

              <option>
                Kas Utama
              </option>

              <option>
                Saldo Admin
              </option>
            </select>

            {/* KETERANGAN */}
            <textarea
              placeholder="Keterangan"
              style={{
                ...input,
                height: 100,
              }}
            />

            <button style={button}>
              Simpan
              Transaksi
            </button>
          </Box>
        </div>
      )}

      {/* LAPORAN */}
      {page === "laporan" && (
        <div style={{ padding: 20 }}>
          <h1>Laporan</h1>

          <Box>
            <h2>
              Total Pemasukan
            </h2>

            <h1
              style={{
                color: "#22c55e",
              }}
            >
              Rp 10.000.000
            </h1>
          </Box>

          <Box>
            <h2>
              Total Pengeluaran
            </h2>

            <h1
              style={{
                color: "#ef4444",
              }}
            >
              Rp 2.000.000
            </h1>
          </Box>

          <Box>
            <h2>
              Laba Bersih
            </h2>

            <h1>
              Rp 8.000.000
            </h1>
          </Box>
        </div>
      )}

      {/* AKUN */}
      {page === "akun" && (
        <div style={{ padding: 20 }}>
          <h1>Akun</h1>

          <Box>
            <p>
              Nama:
              RAFASYA CELL
            </p>

            <p>
              Email:
              admin@gmail.com
            </p>

            <button
              style={{
                ...button,
                background:
                  "#ef4444",
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
        <Menu
          text="Home"
          click={() =>
            setPage("home")
          }
        />

        <Menu
          text="Transaksi"
          click={() =>
            setPage(
              "transaksi"
            )
          }
        />

        <Menu
          text="Tambah"
          click={() =>
            setPage("tambah")
          }
        />

        <Menu
          text="Laporan"
          click={() =>
            setPage(
              "laporan"
            )
          }
        />

        <Menu
          text="Akun"
          click={() =>
            setPage("akun")
          }
        />
      </div>
    </div>
  );
}

// CARD
function Card({
  title,
  saldo,
}) {
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

// BOX
function Box({
  children,
}) {
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

// MENU
function Menu({
  text,
  click,
}) {
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

// STYLE INPUT
const input = {
  width: "100%",
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  border: "none",
  fontSize: 16,
};

// STYLE BUTTON
const button = {
  width: "100%",
  padding: 15,
  border: "none",
  borderRadius: 10,
  background: "#2563eb",
  color: "white",
  fontSize: 16,
};
