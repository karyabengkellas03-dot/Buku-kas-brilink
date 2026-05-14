import { useEffect, useState } from "react";
import { menu } from "./data";

export default function App() {

  const [transaksi, setTransaksi] = useState([]);
  const [jenis, setJenis] = useState("");
  const [nominal, setNominal] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("trx");
    if(data){
      setTransaksi(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trx", JSON.stringify(transaksi));
  }, [transaksi]);

  const tambahTransaksi = () => {
    if(!jenis || !nominal) return;

    const baru = {
      id: Date.now(),
      jenis,
      nominal: Number(nominal)
    };

    setTransaksi([baru, ...transaksi]);

    setJenis("");
    setNominal("");
  };

  const totalNominal = transaksi.reduce(
    (a,b)=>a+b.nominal,0
  );

  return (
    <div className="container">

      <div className="menu">
        {menu.map((m)=>(
          <button key={m}>{m}</button>
        ))}
      </div>

      <h1 className="logo">
        <span className="bri">BRI</span>
        <span className="link">Link</span>
        BukuKas
      </h1>

      <div className="grid">

        <div className="card purple">
          <h3>Total Aset</h3>
          <h1>Rp 526.000.000</h1>
        </div>

        <div className="card blue">
          <h3>Total Transaksi</h3>
          <h1>{transaksi.length}</h1>
        </div>

        <div className="card green">
          <h3>Laba Bersih</h3>
          <h1>Rp {totalNominal.toLocaleString()}</h1>
        </div>

        <div className="card orange">
          <h3>Total Nominal</h3>
          <h1>Rp {totalNominal.toLocaleString()}</h1>
        </div>

      </div>

      <div className="form">

        <h2>Input Transaksi</h2>

        <input
          placeholder="Jenis transaksi"
          value={jenis}
          onChange={(e)=>setJenis(e.target.value)}
        />

        <input
          placeholder="Nominal"
          type="number"
          value={nominal}
          onChange={(e)=>setNominal(e.target.value)}
        />

        <button onClick={tambahTransaksi}>
          Simpan
        </button>

      </div>

      <div className="list">

        <h2>Riwayat Transaksi</h2>

        {transaksi.map((t)=>(
          <div className="item" key={t.id}>
            <span>{t.jenis}</span>
            <b>Rp {t.nominal.toLocaleString()}</b>
          </div>
        ))}

      </div>

    </div>
  );
}
