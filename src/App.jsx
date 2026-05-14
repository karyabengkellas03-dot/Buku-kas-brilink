import { useState } from "react";

export default function App() {
  const [saldoAkun, setSaldoAkun] = useState([
    { nama: "BRI Utama", saldo: 5000000 },
    { nama: "Dana", saldo: 2000000 },
    { nama: "OVO", saldo: 1000000 },
  ]);

  const [jenisList, setJenisList] = useState([
    "Transfer",
    "Tarik Tunai",
    "Setor Tunai",
    "Pulsa",
    "Topup Ewallet",
  ]);

  const [riwayat, setRiwayat] = useState([]);

  const [form, setForm] = useState({
    jenis: "Transfer",
    nominal: "",
    akun: "BRI Utama",
    keterangan: "",
  });

  const [jenisBaru, setJenisBaru] = useState("");

  const totalSaldo = saldoAkun.reduce(
    (a, b) => a + b.saldo,
    0
  );

  const tambahJenis = () => {
    if (!jenisBaru) return;

    setJenisList([...jenisList, jenisBaru]);
    setJenisBaru("");
  };

  const simpanTransaksi = () => {
    if (!form.nominal) return;

    const nominal = Number(form.nominal);

    const updateSaldo = saldoAkun.map((item) => {
      if (item.nama === form.akun) {
        return {
          ...item,
          saldo: item.saldo - nominal,
        };
      }
      return item;
    });

    setSaldoAkun(updateSaldo);

    setRiwayat([
      {
        ...form,
        nominal,
        tanggal: new Date().toLocaleString(),
      },
      ...riwayat,
    ]);

    setForm({
      jenis: "Transfer",
      nominal: "",
      akun: "BRI Utama",
      keterangan: "",
    });
  };

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
            "linear-gradient(135deg,#1d4ed8,#2563eb,#0ea5e9)",
          padding: 25,
          borderRadius: 25,
          marginBottom: 20,
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: 45 }}>Sel Rafasya</h1>

        <h2 style={{ marginTop: 30 }}>
          Total Saldo: Rp {totalSaldo.toLocaleString()}
        </h2>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#22c55e",
              border: "none",
              color: "white",
              padding: 12,
              borderRadius: 10,
            }}
          >
            Dashboard
          </button>

          <button
            style={{
              background: "#f97316",
              border: "none",
              color: "white",
              padding: 12,
              borderRadius: 10,
            }}
          >
            Laporan
          </button>

          <button
            style={{
              background: "#ef4444",
              border: "none",
              color: "white",
              padding: 12,
              borderRadius: 10,
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* CARD TOTAL */}
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
          <h1>{riwayat.length}</h1>
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
            {riwayat
              .reduce((a, b) => a + b.nominal, 0)
              .toLocaleString()}
          </h1>
        </div>
      </div>

      {/* SALDO */}
      <div
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 25,
          marginBottom: 20,
        }}
      >
        <h1>Saldo Akun</h1>

        {saldoAkun.map((item, index) => (
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
          {jenisList.map((j, i) => (
            <option key={i}>{j}</option>
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
          {saldoAkun.map((a, i) => (
            <option key={i}>{a.nama}</option>
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
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: 18,
            marginTop: 20,
            borderRadius: 15,
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
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: 18,
            marginTop: 20,
            borderRadius: 15,
          }}
        >
          Tambah Jenis
        </button>
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

        {riwayat.map((trx, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
              padding: 20,
              borderRadius: 20,
              marginTop: 15,
            }}
          >
            <h2>{trx.jenis}</h2>

            <p>
              Nominal: Rp{" "}
              {trx.nominal.toLocaleString()}
            </p>

            <p>Akun: {trx.akun}</p>

            <p>Keterangan: {trx.keterangan}</p>

            <small>{trx.tanggal}</small>
          </div>
        ))}
      </div>
    </div>
  );
                }
