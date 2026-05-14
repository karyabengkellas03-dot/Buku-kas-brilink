import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [accounts, setAccounts] = useState([
    { id: 1, name: "BRI Utama", saldo: 5000000 },
    { id: 2, name: "Dana", saldo: 2000000 },
  ]);

  const [transactions, setTransactions] = useState([]);

  const [form, setForm] = useState({
    jenis: "Transfer",
    sumber: "BRI Utama",
    penampung: "Dana",
    nominal: "",
    admin: "",
    keterangan: "",
  });

  const totalSaldo = accounts.reduce(
    (a, b) => a + b.saldo,
    0
  );

  const tambahTransaksi = () => {
    const nominal = Number(form.nominal);
    const admin = Number(form.admin);

    if (!nominal) return;

    const updated = accounts.map((acc) => {
      if (acc.name === form.sumber) {
        return {
          ...acc,
          saldo: acc.saldo - nominal - admin,
        };
      }

      if (acc.name === form.penampung) {
        return {
          ...acc,
          saldo: acc.saldo + nominal,
        };
      }

      return acc;
    });

    setAccounts(updated);

    setTransactions([
      {
        ...form,
        tanggal: new Date().toLocaleString(),
      },
      ...transactions,
    ]);

    setForm({
      jenis: "Transfer",
      sumber: "BRI Utama",
      penampung: "Dana",
      nominal: "",
      admin: "",
      keterangan: "",
    });
  };

  return (
    <div
      style={{
        background: "#081028",
        minHeight: "100vh",
        color: "white",
        paddingBottom: 100,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          padding: 20,
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4)",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <h1>BRILink BukuKas</h1>

        <h2>Total Saldo</h2>

        <h1>
          Rp {totalSaldo.toLocaleString("id-ID")}
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          padding: 15,
        }}
      >
        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("transaksi")}>
          Transaksi
        </button>

        <button onClick={() => setPage("laporan")}>
          Laporan
        </button>

        <button onClick={() => setPage("akun")}>
          Akun
        </button>
      </div>

      {page === "dashboard" && (
        <div style={{ padding: 20 }}>
          <h2>Saldo Akun</h2>

          {accounts.map((acc) => (
            <div
              key={acc.id}
              style={{
                background: "#1e293b",
                padding: 20,
                borderRadius: 20,
                marginBottom: 15,
              }}
            >
              <h3>{acc.name}</h3>

              <h2>
                Rp{" "}
                {acc.saldo.toLocaleString("id-ID")}
              </h2>
            </div>
          ))}
        </div>
      )}

      {page === "transaksi" && (
        <div style={{ padding: 20 }}>
          <h2>Input Transaksi</h2>

          <div
            style={{
              background: "#1e293b",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <select
              value={form.jenis}
              onChange={(e) =>
                setForm({
                  ...form,
                  jenis: e.target.value,
                })
              }
              style={input}
            >
              <option>Transfer</option>
              <option>Setor Tunai</option>
              <option>Tarik Tunai</option>
              <option>Pulsa</option>
            </select>

            <select
              value={form.sumber}
              onChange={(e) =>
                setForm({
                  ...form,
                  sumber: e.target.value,
                })
              }
              style={input}
            >
              {accounts.map((acc) => (
                <option key={acc.id}>
                  {acc.name}
                </option>
              ))}
            </select>

            <select
              value={form.penampung}
              onChange={(e) =>
                setForm({
                  ...form,
                  penampung: e.target.value,
                })
              }
              style={input}
            >
              {accounts.map((acc) => (
                <option key={acc.id}>
                  {acc.name}
                </option>
              ))}
            </select>

            <input
              placeholder="Nominal"
              type="number"
              value={form.nominal}
              onChange={(e) =>
                setForm({
                  ...form,
                  nominal: e.target.value,
                })
              }
              style={input}
            />

            <input
              placeholder="Admin Bank"
              type="number"
              value={form.admin}
              onChange={(e) =>
                setForm({
                  ...form,
                  admin: e.target.value,
                })
              }
              style={input}
            />

            <textarea
              placeholder="Keterangan"
              value={form.keterangan}
              onChange={(e) =>
                setForm({
                  ...form,
                  keterangan: e.target.value,
                })
              }
              style={input}
            />

            <button
              onClick={tambahTransaksi}
              style={{
                width: "100%",
                padding: 15,
                borderRadius: 15,
                background: "#2563eb",
                color: "white",
                border: "none",
                fontSize: 18,
              }}
            >
              Simpan Transaksi
            </button>
          </div>

          <h2 style={{ marginTop: 30 }}>
            Riwayat Transaksi
          </h2>

          {transactions.map((trx, i) => (
            <div
              key={i}
              style={{
                background: "#1e293b",
                padding: 20,
                borderRadius: 20,
                marginTop: 15,
              }}
            >
              <h3>{trx.jenis}</h3>

              <p>{trx.tanggal}</p>

              <p>
                Dari: {trx.sumber}
              </p>

              <p>
                Ke: {trx.penampung}
              </p>

              <h2>
                Rp{" "}
                {Number(
                  trx.nominal
                ).toLocaleString("id-ID")}
              </h2>

              <p>
                Admin: Rp{" "}
                {Number(
                  trx.admin
                ).toLocaleString("id-ID")}
              </p>

              <p>{trx.keterangan}</p>
            </div>
          ))}
        </div>
      )}

      {page === "laporan" && (
        <div style={{ padding: 20 }}>
          <h2>Laporan</h2>

          <div
            style={{
              background: "#1e293b",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <h3>
              Total Transaksi:
              {transactions.length}
            </h3>

            <h3>
              Total Saldo:
              Rp{" "}
              {totalSaldo.toLocaleString("id-ID")}
            </h3>
          </div>
        </div>
      )}

      {page === "akun" && (
        <div style={{ padding: 20 }}>
          <h2>Kelola Akun Bank</h2>

          {accounts.map((acc) => (
            <div
              key={acc.id}
              style={{
                background: "#1e293b",
                padding: 20,
                borderRadius: 20,
                marginBottom: 15,
              }}
            >
              <h3>{acc.name}</h3>

              <h2>
                Rp{" "}
                {acc.saldo.toLocaleString("id-ID")}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const input = {
  width: "100%",
  padding: 15,
  marginBottom: 15,
  borderRadius: 15,
  border: "none",
  fontSize: 16,
};
