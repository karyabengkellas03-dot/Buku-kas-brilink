import { useEffect, useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const akun = {
    username: "admin",
    password: "12345",
  };

  const [saldoAkun, setSaldoAkun] = useState([
    {
      nama: "BRI Utama",
      saldo: 5000000,
    },
    {
      nama: "Dana",
      saldo: 2000000,
    },
  ]);

  const [jenisTransaksi, setJenisTransaksi] =
    useState([
      "Transfer",
      "Tarik Tunai",
      "Setor Tunai",
      "Pulsa",
      "Token PLN",
    ]);

  const [filterJenis, setFilterJenis] =
    useState("");

  const [transaksi, setTransaksi] = useState(() => {
    const data = localStorage.getItem("transaksi");
    return data ? JSON.parse(data) : [];
  });

  const [form, setForm] = useState({
    tanggal: "",
    jenis: "",
    akun: "",
    nominal: "",
    keterangan: "",
  });

  const [jenisBaru, setJenisBaru] =
    useState("");

  useEffect(() => {
    localStorage.setItem(
      "transaksi",
      JSON.stringify(transaksi)
    );
  }, [transaksi]);

  const login = () => {
    if (
      loginForm.username === akun.username &&
      loginForm.password === akun.password
    ) {
      setIsLogin(true);
    } else {
      alert("Login gagal");
    }
  };

  const logout = () => {
    setIsLogin(false);
  };

  const tambahJenisTransaksi = () => {
    if (!jenisBaru) return;

    setJenisTransaksi([
      ...jenisTransaksi,
      jenisBaru,
    ]);

    setJenisBaru("");
  };

  const tambahTransaksi = () => {
    if (!form.nominal) {
      alert("Isi nominal");
      return;
    }

    const dataBaru = {
      id: Date.now(),
      tanggal:
        form.tanggal ||
        new Date().toLocaleDateString(),
      jenis: form.jenis,
      akun: form.akun,
      nominal: Number(form.nominal),
      keterangan: form.keterangan,
    };

    setTransaksi([dataBaru, ...transaksi]);

    setForm({
      tanggal: "",
      jenis: "",
      akun: "",
      nominal: "",
      keterangan: "",
    });
  };

  const hapusTransaksi = (id) => {
    const hasil = transaksi.filter(
      (item) => item.id !== id
    );

    setTransaksi(hasil);
  };

  const totalSaldo = transaksi.reduce(
    (a, b) => a + b.nominal,
    0
  );

  const transaksiFilter =
    filterJenis === ""
      ? transaksi
      : transaksi.filter(
          (item) =>
            item.jenis === filterJenis
        );

  if (!isLogin) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f766e",
          padding: 20,
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 20,
            width: "100%",
            maxWidth: 350,
          }}
        >
          <h1>RAFASYA CELL</h1>

          <input
            placeholder="Username"
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm({
                ...loginForm,
                username: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({
                ...loginForm,
                password: e.target.value,
              })
            }
            style={inputStyle}
          />

          <button
            onClick={login}
            style={buttonStyle}
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg,#0f766e,#14b8a6)",
          color: "white",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h1>RAFASYA CELL</h1>

        <h2>
          Total Saldo:
          Rp {totalSaldo.toLocaleString("id-ID")}
        </h2>

        <button
          onClick={logout}
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: 10,
            borderRadius: 10,
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h2>Saldo Akun</h2>

        {saldoAkun.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
            }}
          >
            <b>{item.nama}</b>

            <p>
              Rp{" "}
              {item.saldo.toLocaleString(
                "id-ID"
              )}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h2>Tambah Jenis Transaksi</h2>

        <input
          placeholder="Jenis transaksi baru"
          value={jenisBaru}
          onChange={(e) =>
            setJenisBaru(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={tambahJenisTransaksi}
          style={buttonStyle}
        >
          Tambah Jenis
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h2>Input Transaksi</h2>

        <input
          type="date"
          value={form.tanggal}
          onChange={(e) =>
            setForm({
              ...form,
              tanggal: e.target.value,
            })
          }
          style={inputStyle}
        />

        <select
          value={form.jenis}
          onChange={(e) =>
            setForm({
              ...form,
              jenis: e.target.value,
            })
          }
          style={inputStyle}
        >
          <option value="">
            Pilih Jenis
          </option>

          {jenisTransaksi.map(
            (jenis, index) => (
              <option key={index}>
                {jenis}
              </option>
            )
          )}
        </select>

        <select
          value={form.akun}
          onChange={(e) =>
            setForm({
              ...form,
              akun: e.target.value,
            })
          }
          style={inputStyle}
        >
          <option value="">
            Pilih Akun
          </option>

          {saldoAkun.map((item, index) => (
            <option key={index}>
              {item.nama}
            </option>
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
          style={inputStyle}
        />

        <input
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) =>
            setForm({
              ...form,
              keterangan: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button
          onClick={tambahTransaksi}
          style={buttonStyle}
        >
          Simpan Transaksi
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h2>Filter Riwayat</h2>

        <select
          value={filterJenis}
          onChange={(e) =>
            setFilterJenis(e.target.value)
          }
          style={inputStyle}
        >
          <option value="">
            Semua Transaksi
          </option>

          {jenisTransaksi.map(
            (jenis, index) => (
              <option key={index}>
                {jenis}
              </option>
            )
          )}
        </select>

        <h2>Riwayat Transaksi</h2>

        {transaksiFilter.length === 0 ? (
          <p>Belum ada transaksi</p>
        ) : (
          transaksiFilter.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: 15,
                borderRadius: 15,
                marginBottom: 15,
              }}
            >
              <p>
                <b>Tanggal:</b>
                {item.tanggal}
              </p>

              <p>
                <b>Jenis:</b>
                {item.jenis}
              </p>

              <p>
                <b>Akun:</b>
                {item.akun}
              </p>

              <p>
                <b>Nominal:</b>
                Rp
                {item.nominal.toLocaleString(
                  "id-ID"
                )}
              </p>

              <p>
                <b>Keterangan:</b>
                {item.keterangan}
              </p>

              <button
                onClick={() =>
                  hapusTransaksi(item.id)
                }
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                Hapus
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 14,
  marginBottom: 12,
  borderRadius: 12,
  border: "1px solid #ccc",
  fontSize: 16,
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: 14,
  background: "#0f766e",
  color: "white",
  border: "none",
  borderRadius: 12,
  fontSize: 16,
  fontWeight: "bold",
};
