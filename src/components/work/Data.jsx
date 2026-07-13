import ProjectTA from "../../assets/project-ta.png"; // PENTING: Simpan gambar poster yang Anda kirim ini ke folder src/assets dengan nama "project-ta.png" (huruf kecil semua)
import ProjectPolytron from "../../assets/project-polytron.png"; // PENTING: Simpan gambar/cover laporan ke folder src/assets dengan nama "project-polytron.png"
import ProjectJSN from "../../assets/project-jsn.png"; // PENTING: Simpan gambar/cover laporan ke folder src/assets dengan nama "project-jsn.png"

export const projectsData = [
  {
    id: 1,
    image: ProjectTA,
    image_detail: ProjectTA,
    title: "SEE BY SOUND: Sistem Identifikasi Warna Berbasis Computer Vision",
    category: "Project",
    detail_job: "Proyek Tugas Akhir ini merancang dan mengimplementasikan sistem identifikasi warna berbasis Computer Vision yang terintegrasi pada wearable (jaket) untuk membantu penderita buta warna mengenali warna secara mandiri melalui feedback audio. Sistem menggunakan Raspberry Pi 4 Model B sebagai pemrosesan utama dan webcam JETE W7. Pemrosesan citra menerapkan algoritma HSV yang dikombinasikan dengan teknik preprocessing Adaptive CLAHE dan Gamma Correction untuk menormalisasi pencahayaan yang bervariasi. Identifikasi 12 target warna dilakukan menggunakan Grid Analysis dan Multi-Stage Detection. Hasil pengujian komprehensif mencapai akurasi total 86,39%, beroperasi stabil pada frame rate 16,1 FPS, dan latensi audio di bawah 2 detik untuk informasi real-time.",
    date_job: "2026",
    language: "Python, OpenCV, Raspberry Pi 4, HSV, CLAHE",
    link: "/Laporan_TA_2111513018.pdf",
    link_placeholder: "Tugas Akhir",
  },
  {
    id: 2,
    image: ProjectPolytron,
    image_detail: ProjectPolytron,
    title: "Artificial Neural Network (ANN) Hardware Implementation on FPGA",
    category: "Project",
    detail_job: "Proyek akhir dari program magang MSIB di Polytron (ICDEC). Proyek ini berfokus pada perancangan dan implementasi Artificial Neural Network (ANN) pada tingkat hardware menggunakan arsitektur Systolic Array 6x6. Studi kasus yang digunakan adalah pemodelan untuk memprediksi preferensi makanan khas Indonesia berdasarkan parameter rasa. Modul Processing Element (PE) dirancang pada level RTL menggunakan format komputasi Fixed Point Q5.10. Desain kemudian diintegrasikan ke dalam System on Chip (SoC) pada board FPGA Kria KV. Hasil pengujian menunjukkan bahwa akselerasi hardware pada FPGA melalui library PYNQ mampu mengeksekusi komputasi secara paralel dan mengungguli performa waktu eksekusi software murni (Python) pada pengujian skala iterasi besar.",
    date_job: "Desember 2024",
    language: "Verilog, Python (PYNQ, Numpy), MATLAB, FPGA Kria KV",
    link: "/Laporan_Final_Project_Jevon Al Salgus_fix.pdf",
    link_placeholder: "Laporan Final Project",
  },
  {
    id: 3,
    image: ProjectJSN,
    image_detail: ProjectJSN,
    title: "Analisa Algoritma Ant Colony vs Shortest Path pada Jaringan Sensor Nirkabel",
    category: "Project",
    detail_job: "Proyek Tugas Besar mata kuliah Jaringan Sensor Nirkabel (WSN). Proyek ini berfokus pada simulasi dan analisis perbandingan performa antara algoritma Ant Colony Optimization (ACO) dan Shortest Path Algorithm (SPA) menggunakan MATLAB. Analisa komprehensif dilakukan pada 50 titik sensor (nodes) untuk menentukan rute transmisi data terbaik. Kesimpulan dari penelitian ini menunjukkan bahwa ACO lebih unggul dalam efisiensi penggunaan energi jangka panjang dan lebih adaptif terhadap perubahan kondisi jaringan (dinamis) karena mekanisme pembaruan jejak feromon. Di sisi lain, algoritma SPA (seperti Dijkstra) lebih cepat menemukan rute optimal di awal pada jaringan statis, namun mengonsumsi lebih banyak energi dan kurang fleksibel saat ada node yang mati.",
    date_job: "2024",
    language: "MATLAB, WSN, ACO Algorithm, Dijkstra Algorithm",
    link: "/Laporan_Tugas_Besar_JSN.pdf",
    link_placeholder: "Laporan Tugas Besar",
  },
];

export const projectNav = [
  {
    name: "Project",
  },
];

