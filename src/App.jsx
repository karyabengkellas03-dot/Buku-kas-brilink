const tambahTransaksi = () => {
  if (!form.nominal || !form.akun) {
    alert("Lengkapi data transaksi");
    return;
  }

  const nominal = Number(form.nominal);

  const dataBaru = {
    id: Date.now(),
    tanggal:
      form.tanggal ||
      new Date().toLocaleDateString(),
    jenis: form.jenis,
    akun: form.akun,
    rekeningTujuan: form.rekeningTujuan,
    nominal: nominal,
    keterangan: form.keterangan,
  };

  // POTONG SALDO AKUN ASAL
  const updateSaldo = saldoAkun.map((item) => {
    // akun asal dipotong
    if (item.nama === form.akun) {
      return {
        ...item,
        saldo: item.saldo - nominal,
      };
    }

    // rekening tujuan bertambah
    if (
      item.nama === form.rekeningTujuan
    ) {
      return {
        ...item,
        saldo: item.saldo + nominal,
      };
    }

    return item;
  });

  setSaldoAkun(updateSaldo);

  // simpan transaksi
  setTransaksi([dataBaru, ...transaksi]);

  // reset form
  setForm({
    tanggal: "",
    jenis: "",
    akun: "",
    rekeningTujuan: "",
    nominal: "",
    keterangan: "",
  });
};
