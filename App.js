export default function App() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'20px',
      fontFamily:'Arial'
    }}>
      <h1>
        <span style={{color:'#0ea5e9'}}>BRI</span>
        <span style={{color:'#fb923c'}}>Link</span> BukuKas
      </h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
        gap:'15px',
        marginTop:'20px'
      }}>
        <div style={{background:'#2563eb',padding:'20px',borderRadius:'20px'}}>
          <h3>Total Aset</h3>
          <h2>Rp 256.000.000</h2>
        </div>

        <div style={{background:'#16a34a',padding:'20px',borderRadius:'20px'}}>
          <h3>Laba Bersih</h3>
          <h2>Rp 7.189.401</h2>
        </div>

        <div style={{background:'#ea580c',padding:'20px',borderRadius:'20px'}}>
          <h3>Total Transaksi</h3>
          <h2>294</h2>
        </div>
      </div>

      <div style={{
        marginTop:'30px',
        background:'#18181b',
        padding:'20px',
        borderRadius:'20px'
      }}>
        <h2>Tambah Transaksi</h2>

        <input placeholder="Jenis Transaksi"
          style={{
            width:'100%',
            padding:'12px',
            marginTop:'10px',
            borderRadius:'10px'
          }}
        />

        <input placeholder="Nominal"
          style={{
            width:'100%',
            padding:'12px',
            marginTop:'10px',
            borderRadius:'10px'
          }}
        />

        <button style={{
          marginTop:'15px',
          background:'#2563eb',
          color:'#fff',
          padding:'12px 20px',
          border:'none',
          borderRadius:'10px'
        }}>
          Simpan
        </button>
      </div>
    </div>
  )
}
