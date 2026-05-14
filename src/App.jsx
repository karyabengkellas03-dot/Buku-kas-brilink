import React, { useState } from "react";

export default function App() {
  // PAGE
  const [page, setPage] = useState("home");

  // DATA AKUN
  const [accounts, setAccounts] = useState([
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

  // JENIS TRANSAKSI
  const [jenisList, setJenisList] = useState([
    {
      nama: "Transfer",
      admin: 2500,
    },
    {
      nama: "Tarik Tunai",
      admin: 5000,
    },
  ]);

  // RIWAYAT
  const [transactions, setTransactions] =
    useState([]);

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

  // FORM TRANSAKSI
  const [form, setForm] = useState({
    jenis: "",
    nominal: "",
    potonganBank: "",
    sumber: "",
    penampung: "",
    adminMasuk: "",
    ket: "",
  });

  // FORM JENIS
  const [newJenis, setNewJenis] =
    useState({
      nama: "",
      admin: "",
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

  // TAMBAH JENIS
  const tambahJenis = () => {
    if (
      !newJenis.nama ||
      !newJenis.admin
    ) {
      alert("Isi data");
      return;
    }

    setJenisList([
      ...jenisList,
      {
        nama: newJenis.nama,
        admin: parseInt(
          newJenis.admin
        ),
      },
    ]);

    setNewJenis({
      nama: "",
      admin: "",
    });
  };

  // SIMPAN TRANSAKSI
  const simpanTransaksi = () => {
    if (
      !form.nominal ||
      !form.sumber ||
      !form.jenis
    ) {
      alert(
        "Lengkapi transaksi"
      );
      return;
    }

    const nominal = parseInt(
      form.nominal
    );

    const potonganBank =
      parseInt(
        form.potonganBank || 0
      );

    // ADMIN OTOMATIS
    const jenisDipilih =
      jenisList.find(
        (j) =>
          j.nama === form.jenis
      );

    const biayaAdmin =
      jenisDipilih?.admin || 0;

    // TOTAL KELUAR
    const totalKeluar =
      nominal + potonganBank;

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
              totalKeluar,
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

        // ADMIN MASUK
        if (
          item.nama ===
          form.adminMasuk
        ) {
          return {
            ...item,
            saldo:
              item.saldo +
              biayaAdmin,
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
        potonganBank,
        admin:
          biayaAdmin,
        tanggal:
          new Date().toLocaleString(),
      },
      ...transactions,
    ]);

    // RESET
    setForm({
      jenis: "",
      nominal: "",
      potonganBank: "",
      sumber: "",
      penampung: "",
      adminMasuk: "",
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
                  <option key={i}>
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

      {/* RIWAYAT */}
      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h1>Riwayat</h1>

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
                  Potongan
                  Bank:
                  Rp{" "}
                  {item.potonganBank?.toLocaleString()}
                </p>

                <p>
                  Admin:
                  Rp{" "}
                  {item.admin.toLocaleString()}
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

      {/* INPUT TRANSAKSI */}
      {page === "tambah" && (
        <div style={{ padding: 20 }}>
          <h1>
            Input
            Transaksi
          </h1>

          <Box>
            {/* JENIS */}
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
                Pilih Jenis
              </option>

              {jenisList.map(
                (item, i) => (
                  <option key={i}>
                    {item.nama}
                  </option>
                )
              )}
            </select>

            {/* NOMINAL */}
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

            {/* POTONGAN BANK */}
            <input
              type="number"
              placeholder="Potongan Bank"
              style={input}
              value={
                form.potonganBank
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  potonganBank:
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
                  <option key={i}>
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
                  <option key={i}>
                    {item.nama}
                  </option>
                )
              )}
            </select>

            {/* ADMIN */}
            <select
              style={input}
              value={
                form.adminMasuk
              }
              onChange={(e) =>
                setForm({
                  ...form,
                  adminMasuk:
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
                  <option key={i}>
                    {item.nama}
                  </option>
                )
              )}
            </select>

            {/* KETERANGAN */}
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
            </button>
          </Box>
        </div>
      )}

      {/* JENIS */}
      {page === "jenis" && (
        <div style={{ padding: 20 }}>
          <h1>
            Jenis
            Transaksi
          </h1>

          <Box>
            <input
              placeholder="Nama Jenis"
              style={input}
              value={
                newJenis.nama
              }
              onChange={(e) =>
                setNewJenis({
                  ...newJenis,
                  nama:
                    e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Biaya Admin"
              style={input}
              value={
                newJenis.admin
              }
              onChange={(e) =>
                setNewJenis({
                  ...newJenis,
                  admin:
                    e.target.value,
                })
              }
            />

            <button
              style={button}
              onClick={
                tambahJenis
              }
            >
              Tambah Jenis
            </button>
          </Box>

          {jenisList.map(
            (item, index) => (
              <Box key={index}>
                <h2>{item.nama}</h2>

                <h3>
                  Admin:
                  Rp{" "}
                  {item.admin.toLocaleString()}
                </h3>
              </Box>
            )
          )}
        </div>
      )}

      {/* LAPORAN */}
{page === "laporan" && (
  <div style={{ padding: 20 }}>
    {/* TOTAL TRANSAKSI */}
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

    {/* TOTAL SALDO */}
    <Box>
      <h2>
        Total Saldo
      </h2>

      <h1>
        Rp{" "}
        {totalSaldo.toLocaleString()}
      </h1>
    </Box>

    {/* MINGGUAN */}
    <Box>
      <h2>
        Rekapan
        Mingguan
      </h2>

      <h1>
        Rp{" "}
        {transactions
          .reduce(
            (a, b) =>
              a +
              b.nominal,
            0
          )
          .toLocaleString()}
      </h1>
    </Box>

    {/* BULANAN */}
    <Box>
      <h2>
        Rekapan
        Bulanan
      </h2>

      <h1>
        Rp{" "}
        {transactions
          .reduce(
            (a, b) =>
              a +
              b.nominal,
            0
          )
          .toLocaleString()}
      </h1>
    </Box>

    {/* TAHUNAN */}
    <Box>
      <h2>
        Rekapan
        Tahunan
      </h2>

      <h1>
        Rp{" "}
        {transactions
          .reduce(
            (a, b) =>
              a +
              b.nominal,
            0
          )
          .toLocaleString()}
      </h1>
    </Box>

    {/* TRANSAKSI ATM */}
    <Box>
      <h2>
        Jumlah
        Transaksi ATM
      </h2>

      <h1>
        {
          transactions.filter(
            (item) =>
              item.jenis ===
              "ATM"
          ).length
        }
      </h1>
    </Box>

    {/* TOTAL ATM */}
    <Box>
      <h2>
        Total Nominal
        ATM
      </h2>

      <h1>
        Rp{" "}
        {transactions
          .filter(
            (item) =>
              item.jenis ===
              "ATM"
          )
          .reduce(
            (a, b) =>
              a +
              b.nominal,
            0
          )
          .toLocaleString()}
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
          overflowX: "auto",
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
          text="Jenis"
          click={() =>
            setPage("jenis")
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
        margin: 5,
        padding: 12,
        border: "none",
        borderRadius: 10,
        background: "#2563eb",
        color: "white",
        minWidth: 90,
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
