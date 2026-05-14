import { useState } from 'react'
import { transaksi as dataAwal } from './data'

export default function App() {
  const [transaksi, setTransaksi] = useState(dataAwal)
  const [jenis, setJenis] = useState('')
  const [nominal, setNominal] = useState('')

  const tambahTransaksi = () => {
    if (!jenis || !nominal) {
      alert('Lengkapi data')
      return
    }

    const dataBaru = {
      tanggal: new Date().toLocaleDateString(),
      jenis,
      nominal: Number(nominal)
    }

    setTransaksi([dataBaru, ...transaksi])
    setJenis('')
    setNominal('')
  }

  const totalNominal = transaksi.reduce((a, b) => a + b.nominal, 0)

  return (
    <div className="container">
      <div className="sidebar">
        <h2>BRILink</h2>
        <button>Dashboard</button>
        <button>Input Transaksi</button>
        <button>Data Transaksi</button>
        <button>Shift Kerja</button>
        <button>Mutasi</button>
        <button>Laporan</button>
      </div>

      <div className="content">
        <h1>BRILink BukuKas</h1>

        <div className="cards">
          <div className="card purple">
            <h3>Total Aset</h3>
            <h2>Rp 526.000.000</h2>
          </div>

          <div className="card blue">
            <h3>Total Transaksi</h3>
            <h2>{transaksi.length}</h2>
          </div>

          <div className="card green">
            <h3>Laba Bersih</h3>
            <h2>Rp 7.189.401</h2>
          </div>

          <div className="card orange">
            <h3>Total Nominal</h3>
            <h2>Rp {totalNominal.toLocaleString()}</h2>
          </div>
        </div>

        <div className="formBox">
          <h2>Input Transaksi</h2>

          <input
            placeholder="Jenis transaksi"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          />

          <input
            placeholder="Nominal"
            type="number"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />

          <button onClick={tambahTransaksi}>Simpan</button>
        </div>

        <div className="tableBox">
          <h2>Data Transaksi</h2>

          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Jenis</th>
                <th>Nominal</th>
              </tr>
            </thead>

            <tbody>
              {transaksi.map((item, index) => (
                <tr key={index}>
                  <td>{item.tanggal}</td>
                  <td>{item.jenis}</td>
                  <td>Rp {item.nominal.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
