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

  const [transaksi, setTransaksi] = useState(() => {
    const data = localStorage.getItem("transaksi");
    return data ? JSON.parse(data) : [];
  });

  const [form, setForm] = useState({
    tanggal: "",
    jenis: "",
    nominal: "",
    keterangan: "",
  });

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
      alert("Username atau password salah");
    }
  };

  const logout = () => {
    setIsLogin(false);
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
      nominal: Number(form.nominal),
      keterangan: form.keterangan,
    };

    setTransaksi([dataBaru, ...transaksi]);

    setForm({
      tanggal: "",
      jenis: "",
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

          <p>Login Admin</p>

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

          <p style={{ marginTop: 15 }}>
            Username: admin
            <br />
            Password: 12345
          </p>
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
          Saldo:
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

          <option>Transfer</option>
          <option>Tarik Tunai</option>
          <option>Setor Tunai</option>
          <option>Pulsa</option>
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
        <h2>Riwayat Transaksi</h2>

        {transaksi.length === 0 ? (
          <p>Belum ada transaksi</p>
        ) : (
          transaksi.map((item) => (
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
                <b>Tanggal:</b> {item.tanggal}
              </p>

              <p>
                <b>Jenis:</b> {item.jenis}
              </p>

              <p>
                <b>Nominal:</b> Rp
                {item.nominal.toLocaleString("id-ID")}
              </p>

              <p>
                <b>Keterangan:</b> {item.keterangan}
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
