import { useEffect, useState } from "react";
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
                onClick={() => hapusTransaksi(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
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
