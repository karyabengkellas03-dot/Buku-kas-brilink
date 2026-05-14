import { useState } from "react";

export default function App() {
  const [saldoA, setSaldoA] = useState(5000000);
  const [saldoB, setSaldoB] = useState(2000000);

  const [nominal, setNominal] = useState("");
  const [admin, setAdmin] = useState("");

  const [riwayat, setRiwayat] = useState([]);

  const totalSaldo = saldoA + saldoB;

  const simpanTransaksi = () => {
    const nom = Number(nominal);
    const adm = Number(admin);

    if (!nom) return;

    setSaldoA(saldoA - nom - adm);
    setSaldoB(saldoB + nom);

    setRiwayat([
      {
        tanggal: new Date().toLocaleString(),
        nominal: nom,
        admin: adm,
      },
      ...riwayat,
    ]);

    setNominal("");
    setAdmin("");
  };

  return (
    <div
      style={{
        background: "#081028",
        minHeight: "100vh",
        color: "white",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4)",
          padding: 25,
          borderRadius: 30,
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
          background: "#1e293b",
          marginTop: 20,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>Saldo Akun</h2>

        <h3>
          BRI Utama:
          Rp {saldoA.toLocaleString("id-ID")}
        </h3>

        <h3>
          Dana:
          Rp {saldoB.toLocaleString("id-ID")}
        </h3>
      </div>

      <div
        style={{
          background: "#1e293b",
          marginTop: 20,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>Input Transaksi</h2>

        <input
          type="number"
          placeholder="Nominal"
          value={nominal}
          onChange={(e) =>
            setNominal(e.target.value)
          }
          style={input}
        />

        <input
          type="number"
          placeholder="Admin Bank"
          value={admin}
          onChange={(e) =>
            setAdmin(e.target.value)
          }
          style={input}
        />

        <button
          onClick={simpanTransaksi}
          style={button}
        >
          Simpan Transaksi
        </button>
      </div>

      <div
        style={{
          background: "#1e293b",
          marginTop: 20,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>Riwayat</h2>

        {riwayat.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#334155",
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
          >
            <p>{item.tanggal}</p>

            <h3>
              Rp{" "}
              {item.nominal.toLocaleString(
                "id-ID"
              )}
            </h3>

            <p>
              Admin:
              Rp{" "}
              {item.admin.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 15,
  borderRadius: 15,
  border: "none",
  marginBottom: 15,
  fontSize: 16,
};

const button = {
  width: "100%",
  padding: 15,
  borderRadius: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  fontSize: 18,
};
