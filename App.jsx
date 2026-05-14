import { useState } from 'react';

export default function RafasyaCellApp() {
  const [transactions, setTransactions] = useState([
    {
      tanggal: '16/05/2026',
      jenis: 'Transfer',
      produk: 'BRI',
      referensi: '12345678',
      nominal: 'Rp 500.000',
      fee: 'Rp 2.500',
      status: 'Sukses',
    },
  ]);

  const [form, setForm] = useState({
    tanggal: '',
    jenis: '',
    produk: '',
    referensi: '',
    nominal: '',
    fee: '',
    keterangan: '',
  });

  const addTransaction = () => {
    if (!form.jenis || !form.nominal) {
      alert('Lengkapi data transaksi');
      return;
    }

    setTransactions([
      ...transactions,
      {
        tanggal: form.tanggal || 'Hari Ini',
        jenis: form.jenis,
        produk: form.produk,
        referensi: form.referensi,
        nominal: form.nominal,
        fee: form.fee,
        status: 'Sukses',
      },
    ]);

    setForm({
      tanggal: '',
      jenis: '',
      produk: '',
      referensi: '',
      nominal: '',
      fee: '',
      keterangan: '',
    });
  };

  return (
    <div style={{padding:'20px',fontFamily:'Arial'}}>
      <h1>RAFASYA CELL</h1>
      <h3>Aplikasi Pembukuan BRILink</h3>

      <div style={{marginTop:'20px'}}>
        <input placeholder="Tanggal" value={form.tanggal} onChange={(e)=>setForm({...form,tanggal:e.target.value})} />
        <select value={form.jenis} onChange={(e)=>setForm({...form,jenis:e.target.value})}>
          <option value="">Jenis Transaksi</option>
          <option>Transfer</option>
          <option>Tarik Tunai</option>
          <option>Setor Tunai</option>
        </select>
        <input placeholder="Produk" value={form.produk} onChange={(e)=>setForm({...form,produk:e.target.value})} />
        <input placeholder="Referensi" value={form.referensi} onChange={(e)=>setForm({...form,referensi:e.target.value})} />
        <input placeholder="Nominal" value={form.nominal} onChange={(e)=>setForm({...form,nominal:e.target.value})} />
        <button onClick={addTransaction}>Simpan</button>
      </div>

      <table border="1" cellPadding="10" style={{marginTop:'20px',width:'100%'}}>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Jenis</th>
            <th>Produk</th>
            <th>Referensi</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item,index)=>(
            <tr key={index}>
              <td>{item.tanggal}</td>
              <td>{item.jenis}</td>
              <td>{item.produk}</td>
              <td>{item.referensi}</td>
              <td>{item.nominal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
