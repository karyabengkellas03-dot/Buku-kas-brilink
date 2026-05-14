{/* HOME */}
{page === "home" && (
  <div style={{ padding: 20 }}>
    <h1>Dashboard Saldo</h1>

    {/* TAMBAH AKUN */}
    <Box>
      <h2>Tambah Akun Bank</h2>

      <input
        placeholder="Nama Akun Bank"
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
    </Box>

    {/* EDIT AKUN */}
    <Box>
      <h2>Edit Saldo & Nama Akun</h2>

      <select style={input}>
        <option>Pilih Akun</option>

        <option>BRI Utama</option>

        <option>DANA</option>

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
        Simpan Perubahan
      </button>
    </Box>

    {/* AKUN */}
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
    {/* TAMBAH AKUN */}
    <Box>
      <h2>Tambah Akun Bank</h2>

      <input
        placeholder="Nama Akun Bank"
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
    </Box>

    {/* EDIT AKUN */}
    <Box>
      <h2>Edit Akun</h2>

      <select style={input}>
        <option>Pilih Akun</option>

        <option>BRI Utama</option>

        <option>DANA</option>

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
        Simpan Perubahan
      </button>
    </Box>

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
