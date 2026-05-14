import { useState, useEffect } from 'react'

export default function App(){

  const [menu,setMenu] = useState('dashboard')
  const [jenis,setJenis] = useState('')
  const [nominal,setNominal] = useState('')
  const [data,setData] = useState([])

  useEffect(()=>{
    const simpan = localStorage.getItem('trx')
    if(simpan){
      setData(JSON.parse(simpan))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('trx',JSON.stringify(data))
  },[data])

  const tambah = ()=>{
    if(!jenis || !nominal){
      alert('Lengkapi data')
      return
    }

    const baru = {
      id:Date.now(),
      tanggal:new Date().toLocaleDateString(),
      jenis,
      nominal:Number(nominal)
    }

    setData([baru,...data])
    setJenis('')
    setNominal('')
  }

  const hapus = (id)=>{
    setData(data.filter(x=>x.id !== id))
  }

  const total = data.reduce((a,b)=>a+b.nominal,0)

  return(
    <div className='app'>

      <div className='sidebar'>
        <h2>BRILink</h2>

        <button onClick={()=>setMenu('dashboard')}>Dashboard</button>
        <button onClick={()=>setMenu('input')}>Input Transaksi</button>
        <button onClick={()=>setMenu('data')}>Data Transaksi</button>
        <button onClick={()=>setMenu('laporan')}>Laporan</button>
      </div>

      <div className='content'>

        {menu === 'dashboard' && (
          <>
            <h1>Dashboard</h1>

            <div className='grid'>

              <div className='card purple'>
                <h3>Total Aset</h3>
                <h2>Rp 526.000.000</h2>
              </div>

              <div className='card blue'>
                <h3>Total Transaksi</h3>
                <h2>{data.length}</h2>
              </div>

              <div className='card green'>
                <h3>Total Nominal</h3>
                <h2>Rp {total.toLocaleString()}</h2>
              </div>

            </div>
          </>
        )}

        {menu === 'input' && (
          <div className='box'>
            <h2>Tambah Transaksi</h2>

            <input
              placeholder='Jenis transaksi'
              value={jenis}
              onChange={(e)=>setJenis(e.target.value)}
            />

            <input
              placeholder='Nominal'
              type='number'
              value={nominal}
              onChange={(e)=>setNominal(e.target.value)}
            />

            <button onClick={tambah}>Simpan</button>
          </div>
        )}

        {menu === 'data' && (
          <div className='box'>
            <h2>Data Transaksi</h2>

            {data.map((item)=>(
              <div className='item' key={item.id}>
                <div>
                  <b>{item.jenis}</b><br/>
                  {item.tanggal}<br/>
                  Rp {item.nominal.toLocaleString()}
                </div>

                <button
                  className='hapus'
                  onClick={()=>hapus(item.id)}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}

        {menu === 'laporan' && (
          <div className='box'>
            <h2>Laporan</h2>
            <p>Total transaksi: {data.length}</p>
            <p>Total nominal: Rp {total.toLocaleString()}</p>
          </div>
        )}

      </div>

    </div>
  )
}
