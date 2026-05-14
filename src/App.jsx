const menuList = [
  {
    id: "dashboard",
    nama: "Dashboard",
  },
  {
    id: "transaksi",
    nama: "Transaksi",
  },
  {
    id: "riwayat",
    nama: "Riwayat",
  },
  {
    id: "akun",
    nama: "Akun",
  },
  {
    id: "laporan",
    nama: "Laporan",
  },
  {
    id: "qris",
    nama: "QRIS",
  },
  {
    id: "pelanggan",
    nama: "Pelanggan",
  },
  {
    id: "hutang",
    nama: "Hutang",
  },
  {
    id: "backup",
    nama: "Backup",
  },
  {
    id: "pengaturan",
    nama: "Pengaturan",
  },
  {
    id: "profil",
    nama: "Profil",
  },
];
{halaman === "laporan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Laporan Keuangan</h1>

      <div style={laporanCardHijau}>
        <h2>Total Saldo</h2>

        <h1>
          Rp {totalSaldo.toLocaleString()}
        </h1>
      </div>

      <div style={laporanCardMerah}>
        <h2>Total Transaksi</h2>

        <h1>{transaksi.length}</h1>
      </div>
    </div>
  </div>
)}
HALAMAN QRIS
{halaman === "qris" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>QRIS Payment</h1>

      <div
        style={{
          background: "white",
          height: 250,
          borderRadius: 20,
          marginTop: 20,
        }}
      ></div>

      <button style={buttonBiru}>
        Scan QRIS
      </button>
    </div>
  </div>
)}
HALAMAN PELANGGAN
{halaman === "pelanggan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Pelanggan</h1>

      <input
        placeholder="Nama pelanggan"
        style={inputStyle}
      />

      <input
        placeholder="Nomor HP"
        style={inputStyle}
      />

      <button style={buttonHijau}>
        Simpan Pelanggan
      </button>
    </div>
  </div>
)}
HALAMAN HUTANG
{halaman === "hutang" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Hutang</h1>

      <input
        placeholder="Nama"
        style={inputStyle}
      />

      <input
        placeholder="Nominal"
        style={inputStyle}
      />

      <button style={buttonMerah}>
        Simpan Hutang
      </button>
    </div>
  </div>
)}
HALAMAN BACKUP
{halaman === "backup" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Backup Data</h1>

      <button style={buttonBiru}>
        Backup Sekarang
      </button>

      <button style={buttonHijau}>
        Restore Data
      </button>
    </div>
  </div>
)}
HALAMAN PENGATURAN
{halaman === "pengaturan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Pengaturan</h1>

      <button style={buttonBiru}>
        Dark Mode
      </button>

      <button style={buttonHijau}>
        Notifikasi
      </button>

      <button style={buttonMerah}>
        Logout
      </button>
    </div>
  </div>
)}
HALAMAN PROFIL
{halaman === "profil" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Profil Pengguna</h1>

      <div
        style={{
          background: "#334155",
          padding: 30,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>RAFASYA CELL</h2>

        <p>Admin BRILink</p>

        <p>Status: Aktif</p>
      </div>
    </div>
  </div>
)}

Tambahkan style ini DI BAWAH kode:

const buttonBiru = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonHijau = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#16a34a",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonMerah = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#dc2626",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const laporanCardHijau = {
  background: "#16a34a",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};

const laporanCardMerah = {
  background: "#dc2626",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};

Setelah ditambahkan, aplikasi akan memiliki:

Dashboard
Transaksi
Riwayat
Akun
Laporan
QRIS
Pelanggan
Hutang
Backup
Pengaturan
Profil

Total: 11 halaman fitur dengan template modern BRILink dark mode.

Caranya 

Cara menambahkan halaman tambahan ke aplikasi:

1. Buka file
src/App.jsx
2. Cari bagian:
const menuList = [

Lalu ganti dengan kode menu lengkap yang saya kirim tadi.

3. Cari bagian halaman terakhir

Contoh biasanya ada:

{halaman === "riwayat" && (
4. Tempel kode halaman baru DI BAWAHNYA

Urutannya:

{halaman === "riwayat" && (...)}

{halaman === "laporan" && (...)}

{halaman === "qris" && (...)}

{halaman === "pelanggan" && (...)}

{halaman === "hutang" && (...)}

{halaman === "backup" && (...)}

{halaman === "pengaturan" && (...)}

{halaman === "profil" && (...)}
5. Scroll PALING BAWAH file

Cari:

const inputStyle = {

Tempel style tambahan DI BAWAHNYA:

const buttonBiru = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonHijau = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#16a34a",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonMerah = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#dc2626",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};
 {halaman === "qris" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>QRIS Payment</h1>

      <div
        style={{
          background: "white",
          height: 250,
          borderRadius: 20,
          marginTop: 20,
        }}
      ></div>

      <button style={buttonBiru}>
        Scan QRIS
      </button>
    </div>
  </div>
)}
HALAMAN PELANGGAN
{halaman === "pelanggan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Pelanggan</h1>

      <input
        placeholder="Nama pelanggan"
        style={inputStyle}
      />

      <input
        placeholder="Nomor HP"
        style={inputStyle}
      />

      <button style={buttonHijau}>
        Simpan Pelanggan
      </button>
    </div>
  </div>
)}
HALAMAN HUTANG
{halaman === "hutang" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Hutang</h1>

      <input
        placeholder="Nama"
        style={inputStyle}
      />

      <input
        placeholder="Nominal"
        style={inputStyle}
      />

      <button style={buttonMerah}>
        Simpan Hutang
      </button>
    </div>
  </div>
)}
HALAMAN BACKUP
{halaman === "backup" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Backup Data</h1>

      <button style={buttonBiru}>
        Backup Sekarang
      </button>

      <button style={buttonHijau}>
        Restore Data
      </button>
    </div>
  </div>
)}
HALAMAN PENGATURAN
{halaman === "pengaturan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Pengaturan</h1>

      <button style={buttonBiru}>
        Dark Mode
      </button>

      <button style={buttonHijau}>
        Notifikasi
      </button>

      <button style={buttonMerah}>
        Logout
      </button>
    </div>
  </div>
)}
HALAMAN PROFIL
{halaman === "profil" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Profil Pengguna</h1>

      <div
        style={{
          background: "#334155",
          padding: 30,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>RAFASYA CELL</h2>

        <p>Admin BRILink</p>

        <p>Status: Aktif</p>
      </div>
    </div>
  </div>
)}

Tambahkan style ini DI BAWAH kode:

const buttonBiru = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonHijau = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#16a34a",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonMerah = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#dc2626",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const laporanCardHijau = {
  background: "#16a34a",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};

const laporanCardMerah = {
  background: "#dc2626",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};

Setelah ditambahkan, aplikasi akan memiliki:

Dashboard
Transaksi
Riwayat
Akun
Laporan
QRIS
Pelanggan
Hutang
Backup
Pengaturan
Profil

Total: 11 halaman fitur dengan template modern BRILink dark mode.

Caranya 

Cara menambahkan halaman tambahan ke aplikasi:

1. Buka file
src/App.jsx
2. Cari bagian:
const menuList = [

Lalu ganti dengan kode menu lengkap yang saya kirim tadi.

3. Cari bagian halaman terakhir

Contoh biasanya ada:

{halaman === "riwayat" && (
4. Tempel kode halaman baru DI BAWAHNYA

Urutannya:

{halaman === "riwayat" && (...)}

{halaman === "laporan" && (...)}

{halaman === "qris" && (...)}

{halaman === "pelanggan" && (...)}

{halaman === "hutang" && (...)}

{halaman === "backup" && (...)}

{halaman === "pengaturan" && (...)}

{halaman === "profil" && (...)}
5. Scroll PALING BAWAH file

Cari:

const inputStyle = {

Tempel style tambahan DI BAWAHNYA:

const buttonBiru = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonHijau = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#16a34a",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonMerah = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#dc2626",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};
{halaman === "pelanggan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Pelanggan</h1>

      <input
        placeholder="Nama pelanggan"
        style={inputStyle}
      />

      <input
        placeholder="Nomor HP"
        style={inputStyle}
      />

      <button style={buttonHijau}>
        Simpan Pelanggan
      </button>
    </div>
  </div>
)}
{halaman === "hutang" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Data Hutang</h1>

      <input
        placeholder="Nama"
        style={inputStyle}
      />

      <input
        placeholder="Nominal"
        style={inputStyle}
      />

      <button style={buttonMerah}>
        Simpan Hutang
      </button>
    </div>
  </div> 
  
)}
 {halaman === "backup" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Backup Data</h1>

      <button style={buttonBiru}>
        Backup Sekarang
      </button>

      <button style={buttonHijau}>
        Restore Data
      </button>
    </div>
  </div>
)} 
 {halaman === "pengaturan" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Pengaturan</h1>

      <button style={buttonBiru}>
        Dark Mode
      </button>

      <button style={buttonHijau}>
        Notifikasi
      </button>

      <button style={buttonMerah}>
        Logout
      </button>
    </div>
  </div>
)}
 {halaman === "profil" && (
  <div style={{ padding: 20 }}>
    <div style={box}>
      <h1>Profil Pengguna</h1>

      <div
        style={{
          background: "#334155",
          padding: 30,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>RAFASYA CELL</h2>

        <p>Admin BRILink</p>

        <p>Status: Aktif</p>
      </div>
    </div>
  </div>
)} 
 const buttonBiru = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#2563eb",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonHijau = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#16a34a",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const buttonMerah = {
  width: "100%",
  padding: 15,
  border: "none",
  background: "#dc2626",
  color: "white",
  borderRadius: 12,
  marginTop: 15,
};

const laporanCardHijau = {
  background: "#16a34a",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};

const laporanCardMerah = {
  background: "#dc2626",
  padding: 25,
  borderRadius: 20,
  marginTop: 20,
};
 
