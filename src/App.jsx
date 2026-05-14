import { useState } from 'react'
        {saldoBank.map((bank, index) => (
          <div
            key={index}
            style={{
              background: '#1E293B',
              padding: 15,
              borderRadius: 12,
              marginTop: 10,
            }}
          >
            <h3>{bank.nama}</h3>
            <p>Rp {bank.saldo.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: '#101828',
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <h2>Riwayat Transaksi</h2>

        {transaksi.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#1E293B',
              padding: 15,
              borderRadius: 12,
              marginTop: 10,
            }}
          >
            <h3>{item.jenis}</h3>
            <p>Nominal: Rp {parseInt(item.nominal).toLocaleString()}</p>
            <p>Dari: {item.rekeningAsal}</p>
            <p>Ke: {item.rekeningTujuan}</p>
            <p>{item.keterangan}</p>
            <p>{item.tanggal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: 15,
  marginTop: 10,
  borderRadius: 10,
  border: '1px solid #334155',
  background: '#0F172A',
  color: 'white',
  fontSize: 16,
}
