import React, { useState } from "react";

export default function App() {
  // PAGE
  const [page, setPage] = useState("home");

  // DATA AKUN
  const [accounts, setAccounts] =
    useState([
      {
        nama: "BRI Utama",
        saldo: 5000000,
      },
      {
        nama: "DANA",
        saldo: 2000000,
      },
      {
        nama: "OVO",
        saldo: 1500000,
      },
    ]);

  // FORM TAMBAH AKUN
  const [newAccount, setNewAccount] =
    useState({
      nama: "",
      saldo: "",
    });

  // FORM EDIT AKUN
  const [editAccount, setEditAccount] =
    useState({
      pilih: "",
      nama: "",
      saldo: "",
    });

  // DATA TRANSAKSI
  const [transactions, setTransactions] =
    useState([]);

  // FORM TRANSAKSI
  const [form, setForm] = useState({
    jenis: "",
    nominal: "",
    sumber: "",
    penampung: "",
    admin: "",
    ket: "",
  });

  // TOTAL SALDO
  const totalSaldo =
    accounts.reduce(
      (a, b) => a + b.saldo,
      0
    );

  // TAMBAH AKUN
  const tambahAkun = () => {
    if (
      !newAccount.nama ||
      !newAccount.saldo
    ) {
      alert("Isi data akun");
      return;
    }

    setAccounts([
      ...accounts,
      {
        nama: newAccount.nama,
        saldo: parseInt(
          newAccount.saldo
        ),
      },
    ]);

    setNewAccount({
      nama: "",
      saldo: "",
    });
  };

  // EDIT AKUN
  const simpanEditAkun = () => {
    const hasil =
      accounts.map((item) => {
        if (
          item.nama ===
          editAccount.pilih
        ) {
          return {
            ...item,
            nama:
              editAccount.nama ||
              item.nama,
            saldo:
              item.saldo +
              parseInt(
                editAccount.saldo || 0
              ),
          };
        }

        return item;
      });

    setAccounts(hasil);

    setEditAccount({
      pilih: "",
      nama: "",
      saldo: "",
    });
  };

  // SIMPAN TRANSAKSI
  const simpanTransaksi = () => {
    if (
      !form.nominal ||
      !form.sumber
    ) {
      alert(
        "Lengkapi transaksi"
      );
      return;
    }

    const nominal = parseInt(
      form.nominal
    );

    // UPDATE SALDO
    const updateSaldo =
      accounts.map((item) => {
        // SUMBER BERKURANG
        if (
          item.nama ===
          form.sumber
        ) {
          return {
            ...item,
            saldo:
              item.saldo -
              nominal,
          };
        }

        // PENAMPUNG BERTAMBAH
        if (
          item.nama ===
          form.penampung
        ) {
          return {
            ...item,
            saldo:
              item.saldo +
              nominal,
          };
        }

        // ADMIN BERTAMBAH
        if (
          item.nama ===
          form.admin
        ) {
          return {
            ...item,
            saldo:
              item.saldo + 2500,
          };
        }

        return item;
      });

    setAccounts(updateSaldo);

    // SIMPAN RIWAYAT
    setTransactions([
      {
        ...form,
        nominal,
        tanggal:
          new Date().toLocaleString(),
      },
      ...transactions,
    ]);

    // RESET FORM
    setForm({
      jenis: "",
      nominal: "",
      sumber: "",
      penampung: "",
      admin: "",
      ket: "",
    });

    alert(
      "Transaksi berhasil"
    );
  };

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

        <h1>
          Rp{" "}
          {totalSaldo.toLocaleString()}
        </h1>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div style={{ padding: 20 }}>
          {/* TAMBAH AKUN */}
          <Box>
            <h2>Tambah Akun</h2>

            <input
              placeholder="Nama Akun"
              style={input}
              value={
                newAccount.nama
              }
              onChange={(e) =>
                setNewAccount({
                  ...newAccount,
                  nama:
                    e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Saldo Awal"
              style={input}
              value={
                newAccount.saldo
              }
              onChange={(e) =>
                setNewAccount({
                  ...newAccount,
                  saldo:
                    e.target.value,
                })
              }
            />

            <button
              style={button}
              onClick={tambahAkun}
            >
              Tambah Akun
            </button>
          </Box>

          {/* EDIT AKUN */}
          <Box>
            <h2>Edit Akun</h2>

            <select
              style={input}
              value={
                editAccount.pilih
              }
              onChange={(e) =>
                setEditAccount({
                  ...editAccount,
                  pilih:
                    e.target.value,
                })
              }
            >
              <option>
                Pilih Akun
              </option>

              {accounts.map(
                (item, i) => (
                  <option
                    key={i}
                  >
                    {item.nama}
                  </option>
                )
              )}
            </select>

            <input
              placeholder="Nama Baru"
              style={input}
              value={
                editAccount.nama
              }
              onChange={(e) =>
                setEditAccount({
                  ...editAccount,
                  nama:
                    e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Tambah Saldo"
              style={input}
              value={
                editAccount.saldo
              }
              onChange={(e) =>
                setEditAccount({
                  ...editAccount,
                  saldo:
                    e.target.value,
                })
              }
            />

            <button
              style={button}
              onClick={
                simpanEditAkun
              }
            >
              Simpan
            </button>
          </Box>

          {/* LIST AKUN */}
          {accounts.map(
            (item, index) => (
              <Card
                key={index}
                title={item.nama}
                saldo={`Rp ${item.saldo.toLocaleString()}`}
              />
            )
          )}
        </div>
      )}

      {/* TRANSAKSI */}
      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h1>
            Riwayat
            Transaksi
          </h1>

          {transactions.map(
            (item, index) => (
              <Box key={index}>
                <h2>
                  {item.jenis}
                </h2>

                <h1>
                  Rp{" "}
                  {item.nominal.toLocaleString()}
                </h1>

                <p>
                  Dari:
                  {" "}
                  {
                    item.sumber
                  }
                </p>

                <p>
                  Ke:
                  {" "}
                  {
                    item.penampung
                  }
                </p>

                <p>
                  Admin:
                  {" "}
                  {item.admin}
                </p>

                <p>
                  {
                    item.ket
                  }
                </p>

                <small>
                  {
                    item.tanggal
                  }
                </small>
              </Box>
            )
          )}
        </div>
      )}

      {/* INPUT */}
      {page === "tambah" && (
        <div style={{ padding: 20 }}>
          <h1>
            Input
            Transaksi
          </h1>

          <Box>
            <select
              style={input}
              value={form.jenis}
              onChange={(e) =>
                setForm({
                  ...form,
                  jenis:
                    e.target.value,
                })
              }
            >
              <option>
                Jenis
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
            </select>

            <input
              type="number"
              placeholder="Nominal"
              style={input}
              value={
                form.nominal
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  nominal:
                    e.target.value,
                })
              }
            />

            {/* SUMBER */}
            <select
              style={input}
              value={
                form.sumber
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  sumber:
                    e.target.value,
                })
              }
            >
              <option>
                Sumber
                Saldo
              </option>

              {accounts.map(
                (item, i) => (
                  <option
                    key={i}
                  >
                    {item.nama}
                  </option>
                )
              )}
            </select>

            {/* PENAMPUNG */}
            <select
              style={input}
              value={
                form.penampung
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  penampung:
                    e.target.value,
                })
              }
            >
              <option>
                Rekening
                Penampung
              </option>

              {accounts.map(
                (item, i) => (
                  <option
                    key={i}
                  >
                    {item.nama}
                  </option>
                )
              )}
            </select>

            {/* ADMIN */}
            <select
              style={input}
              value={form.admin}
              onChange={(e) =>
                setForm({
                  ...form,
                  admin:
                    e.target.value,
                })
              }
            >
              <option>
                Admin
                Masuk
              </option>

              {accounts.map(
                (item, i) => (
                  <option
                    key={i}
                  >
                    {item.nama}
                  </option>
                )
              )}
            </select>

            <textarea
              placeholder="Keterangan"
              style={{
                ...input,
                height: 100,
              }}
              value={form.ket}
              onChange={(e) =>
                setForm({
                  ...form,
                  ket:
                    e.target.value,
                })
              }
            />

            <button
              style={button}
              onClick={
                simpanTransaksi
              }
            >
              Simpan
              Transaksi
            </button>
          </Box>
        </div>
      )}

      {/* LAPORAN */}
      {page === "laporan" && (
        <div style={{ padding: 20 }}>
          <Box>
            <h2>
              Total
              Transaksi
            </h2>

            <h1>
              {
                transactions.length
              }
            </h1>
          </Box>

          <Box>
            <h2>
              Total Saldo
            </h2>

            <h1>
              Rp{" "}
              {totalSaldo.toLocaleString()}
            </h1>
          </Box>
        </div>
      )}

      {/* AKUN */}
      {page === "akun" && (
        <div style={{ padding: 20 }}>
          <Box>
            <h2>
              RAFASYA CELL
            </h2>

            <p>
              Admin
              BRILink
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
          text="Riwayat"
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

// INPUT
const input = {
  width: "100%",
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  border: "none",
  fontSize: 16,
};

// BUTTON
const button = {
  width: "100%",
  padding: 15,
  border: "none",
  borderRadius: 10,
  background: "#2563eb",
  color: "white",
  fontSize: 16,
};
