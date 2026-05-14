export default function App() {
  return (
    <div
      style={{
        background: "#081028",
        minHeight: "100vh",
        padding: 20,
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1>BRILink BukuKas</h1>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Total Saldo</h2>
        <h1>Rp 8.500.000</h1>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Menu</h2>

        <button style={{ width: "100%", padding: 15, marginTop: 10 }}>
          Input Transaksi
        </button>

        <button style={{ width: "100%", padding: 15, marginTop: 10 }}>
          Saldo Akun
        </button>

        <button style={{ width: "100%", padding: 15, marginTop: 10 }}>
          Rekap Harian
        </button>

        <button style={{ width: "100%", padding: 15, marginTop: 10 }}>
          Rekap Bulanan
        </button>
      </div>
    </div>
  );
}
