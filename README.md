**LAPORAN PRAKTIKUM** <br>

**=========================** <br>
**NIM : 244107027020** <br>
**NAMA : BAYU GILANG PAMUNGKAS** <br>
**KELAS : TI - 4K RPL** <br>
**=========================** <br>

**Praktikum 1: React Context untuk State Global Sederhana** <br>

![chrome_M38Hn25ssj](https://github.com/user-attachments/assets/303a18e8-1322-42f8-a764-2a9edf813f41) <br>
**Praktikum 2: Zustand untuk State Management Kompleks** <br>

![chrome_OXJLFhO2TH](https://github.com/user-attachments/assets/11e35ffc-ca6b-4304-84e5-80d2bf438be3) <br>

**Praktikum 3: Redux Toolkit dengan SSR Support** <br>

![chrome_cxwpYwjNC8](https://github.com/user-attachments/assets/ebec03b8-01fb-4f45-aff7-b4757801e322) <br>

**Praktikum 4: Data Fetching dengan SWR** <br>

![UMWAMNIPsT](https://github.com/user-attachments/assets/f0834d02-e146-4255-89f6-b5dc37f2a372) <br>

**Praktikum 5: URL State Management** <br>

![nZIGkg7FVM](https://github.com/user-attachments/assets/85d97c0f-02b4-4dd2-b599-57294a259d4c) <br>


# Tugas <br>
1.	Bandingkan performa antara Context API, Zustand, dan Redux <br>
2.	Diskusikan kapan sebaiknya menggunakan masing-masing solusi <br>

## 🚀 Perbandingan State Management: Context API, Zustand, Redux Toolkit
## 📊 Tabel Perbandingan

| Fitur               | Context API           | Zustand               | Redux Toolkit         |
|---------------------|----------------------|----------------------|----------------------|
| **Ukuran Bundle**   | 🟢 Ringan (bawaan)   | 🟢 Sangat ringan (~1KB) | 🟠 Agak berat (Redux + DevTools) |
| **Kode Boilerplate** | 🟡 Sedikit (tapi bisa kompleks) | 🟢 Minimal | 🟠 Banyak (diringankan RTK) |
| **Setup**          | 🟢 Instant (no install) | 🟢 Mudah (`npm install zustand`) | 🟠 Butuh konfigurasi awal |
| **Performance**    | 🟡 Kurang optimal (re-render) | 🟢 Optimal (selectors) | 🟢 Baik (`useSelector`) |
| **DevTools**       | 🔴 Tidak ada | 🟡 Plugin eksternal | 🟢 Built-in Redux DevTools |
| **Learning Curve** | 🟢 Mudah | 🟢 Mudah | 🟠 Sedang-tinggi |
| **Skalabilitas**   | 🟡 Terbatas | 🟢 Baik | 🟢 Sangat baik |


---

## 📌 Panduan Memilih State Management

| Solusi          | Cocok Digunakan Ketika...                                                                 | Tidak Cocok Jika...                                                                 |
|----------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Context API** | 🔸 Butuh state sederhana (tema/bahasa) <br> 🔸 Tidak mau install library tambahan <br> 🔸 Hanya dipakai di 2-3 komponen | 🚫 State sangat sering update <br> 🚫 Aplikasi besar dengan banyak komponen <br> 🚫 Butuh optimasi performa |
| **Zustand**    | 🔸 Mau solusi praktis "pasang langsung pakai" <br> 🔸 Ingin performa tinggi tanpa ribet <br> 🔸 Proyek kecil-menengah tapi mungkin berkembang | 🚫 Butuh fitur enterprise (Saga/Thunk) <br> 🚫 Harus pakai Redux karena tim sudah terbiasa |
| **Redux Toolkit** | 🔸 Bangun aplikasi enterprise <br> 🔸 Butuh debugging canggih <br> 🔸 Banyak developer bekerja bersama <br> 🔸 Perlukan middleware (async logic) | 🚫 Proyek kecil yang sederhana <br> 🚫 Mau cepat selesai tanpa setup rumit |
