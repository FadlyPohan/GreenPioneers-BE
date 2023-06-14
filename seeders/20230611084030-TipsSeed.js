'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tips',
      [
        {
          id: 'tips-00Yq',
          judul: 'Tips Praktis untuk Menjaga Lingkungan di Kehidupan Sehari-hari',
          isi: 'Menggunakan Botol Minum Sendiri: Bawa botol minum sendiri yang dapat diisi ulang saat bepergian. Ini membantu mengurangi penggunaan botol air plastik sekali pakai yang berkontribusi pada limbah plastik.\\\n\\\nMemilih Produk dengan Label Lingkungan: Saat berbelanja, perhatikan label lingkungan seperti sertifikasi organik, ramah lingkungan, dan adil dagang. Hal ini membantu mendukung produsen yang peduli terhadap lingkungan dan masyarakat.\\\n\\\nDaur Ulang dan Mengurangi Sampah: Praktekkan daur ulang di rumah dengan memisahkan sampah sesuai dengan jenisnya. Selain itu, coba untuk mengurangi penggunaan bahan-bahan sekali pakai dan berpikir kreatif tentang cara mendaur ulang barang-barang yang tidak lagi digunakan.\\\n\\\nMenggunakan Kertas Daur Ulang: Gunakan kertas daur ulang untuk mencetak atau menulis. Ini membantu mengurangi penebangan pohon dan mengurangi dampak negatif pada hutan.\\\n\\\nMenghemat Energi di Rumah: Gunakan peralatan hemat energi seperti lampu LED, matikan peralatan elektronik saat tidak digunakan, dan isolasi rumah dengan baik untuk mengurangi konsumsi energi.\\\n\\\nMenggunakan Transportasi Berkelanjutan: Berpikir untuk menggunakan transportasi umum, berjalan kaki, atau bersepeda saat memungkinkan. Ini membantu mengurangi emisi gas buang yang merusak lingkungan.\\\n\\\nMengurangi Penggunaan Plastik: Kurangi penggunaan plastik sekali pakai seperti sedotan, kantong plastik, dan wadah makanan plastik. Gantilah dengan alternatif yang lebih ramah lingkungan seperti sedotan stainless steel, tas belanja kain, dan wadah makanan tahan lama.\\\n\\\nMembeli Makanan Lokal dan Organik: Dukung petani lokal dengan membeli makanan lokal dan organik. Hal ini membantu mengurangi jejak karbon yang dihasilkan dari pengiriman makanan dari jarak jauh dan mendukung praktik pertanian yang berkelanjutan.\\\n\\\nMenanam Pohon: Tanam pohon di halaman rumah atau ikut dalam kegiatan penanaman pohon di komunitas setempat. Pohon membantu mengurangi emisi karbon, menyediakan habitat untuk satwa liar, dan meningkatkan kualitas udara.\\\n\\\nBerpartisipasi dalam Aksi Lingkungan: Bergabung dengan kelompok atau organisasi lingkungan setempat. Bersama-sama, kita dapat melakukan aksi nyata untuk melindungi lingkungan seperti pembersihan pantai, penanaman pohon, dan kampanye kesadaran lingkungan.',
          gambar: 'https://i.ibb.co/zJWVHrb/protecting-the-environment.jpg',
        },
        {
          id: 'tips-1htf',
          judul: 'Tips Kontribusi Positif untuk Lingkungan Laut',
          isi: 'Hindari Penggunaan Produk Plastik Sekali Pakai: Mengurangi penggunaan sedotan plastik, kantong plastik, dan wadah makanan plastik yang dapat mencemari lingkungan laut.\\\n\\\nPilih Ikan yang Berkelanjutan: Memilih ikan yang berasal dari sumber tangkapan yang berkelanjutan untuk mengurangi penangkapan ikan yang berlebihan dan merusak ekosistem laut.\\\n\\\nDukung Upaya Penyelamatan Terumbu Karang: Berpartisipasi dalam kegiatan konservasi terumbu karang, seperti pemulihan terumbu karang dan penanaman terumbu karang baru.\\\n\\\nKurangi Penggunaan Pesticida dan Bahan Kimia: Mengurangi penggunaan pestisida dan bahan kimia di kebun atau taman yang dapat mencemari air dan mempengaruhi kehidupan laut.\\\n\\\nPilih Produk Perawatan Pribadi Ramah Laut: Menggunakan produk perawatan pribadi yang bebas dari bahan kimia berbahaya seperti paraben dan triclosan yang dapat mencemari air laut.\\\n\\\nBerpartisipasi dalam Pembersihan Pantai: Bergabung dalam kegiatan pembersihan pantai untuk membersihkan sampah plastik dan limbah lainnya yang terdampar di pantai dan berpotensi mencemari laut.\\\n\\\nMenghindari Penggunaan Pewarna dan Produk Kimia Berbahaya di Kapal: Menghindari penggunaan pewarna dan produk kimia berbahaya saat merawat kapal atau perahu untuk mencegah pencemaran laut.\\\n\\\nMenggunakan Pelindung Matahari yang Aman untuk Laut: Menggunakan tabir surya yang ramah lingkungan dan aman untuk terumbu karang dan biota laut.\\\n\\\nMengurangi Penggunaan Air Tawar: Mengurangi penggunaan air tawar di rumah, seperti mengumpulkan air hujan untuk irigasi atau menggunakan teknologi hemat air seperti tangki toilet ganda.\\\n\\\nEdukasi dan Kesadaran Masyarakat: Meningkatkan kesadaran masyarakat tentang pentingnya menjaga lingkungan laut melalui kampanye edukasi, acara, dan media sosial.',
          gambar: 'https://i.ibb.co/HFNMtT2/beach.jpg',
        },

        {
          id: 'tips-bqKY',
          judul: 'Tips Mengurangi Jejak Karbon Anda',
          isi: 'Kurangi Penggunaan Listrik: Matikan peralatan elektronik yang tidak digunakan, gantilah lampu pijar dengan lampu hemat energi, dan pertimbangkan penggunaan panel surya atau energi terbarukan di rumah Anda. \\n\\nGunakan Transportasi Ramah Lingkungan: Pilihlah berjalan kaki, bersepeda, atau menggunakan transportasi umum jika memungkinkan. Jika Anda harus menggunakan mobil, carilah kendaraan dengan efisiensi bahan bakar yang tinggi atau pertimbangkan mobil listrik. \\n\\nKurangi Konsumsi Daging: Produksi daging memiliki dampak besar terhadap emisi gas rumah kaca. Cobalah mengurangi konsumsi daging merah dan gantilah dengan sumber protein nabati seperti kacang-kacangan, biji-bijian, dan sayuran.',
          gambar: 'https://i.ibb.co/r4wnS2s/1.png',
        },
        {
          id: 'tips-IpPe',
          judul: 'Tips Mengurangi Penggunaan Plastik Sekali Pakai',
          isi: 'Bawa Tas Belanja Sendiri: Selalu siapkan tas belanja kain atau tas ransel yang dapat digunakan kembali ketika berbelanja. Hindari penggunaan kantong plastik sekali pakai di toko. \\n\\nGunakan Botol Minum dan Wadah Makanan Bawaan: Bawa botol minum dan wadah makanan sendiri saat bepergian. Dengan menghindari penggunaan botol plastik dan kemasan makanan sekali pakai, Anda dapat mengurangi limbah plastik yang dihasilkan. \\n\\nGunakan Produk Alternatif: Coba cari produk rumah tangga yang tidak menggunakan plastik atau memilih produk yang menggunakan bahan plastik ramah lingkungan, seperti plastik biodegradable atau terbuat dari daur ulang.',
          gambar: 'https://i.ibb.co/frJK3qp/2-5.jpg',
        },
        {
          id: 'tips-WXwE',
          judul: 'Tips Menjaga Keseimbangan Ekosistem',
          isi: 'Dukung Pertanian Organik: Pilihlah makanan yang berasal dari pertanian organik atau lokal yang menggunakan metode pertanian berkelanjutan tanpa penggunaan pestisida dan pupuk kimia berlebihan. \\n\\nTanam Pohon dan Tumbuhan: Tanam pohon dan tanaman di sekitar rumah Anda atau ikut serta dalam program penanaman pohon. Tumbuhan berperan penting dalam menjaga keberlanjutan ekosistem dan mengurangi kadar karbon dioksida di atmosfer. \\n\\nDaur Ulang dan Mendaur Ulang: Lakukan praktik daur ulang dengan memisahkan sampah organik dan non-organik. Selain itu, coba untuk mendaur ulang barang-barang seperti kertas, kaca, dan plastik untuk mengurangi limbah dan penggunaan sumber daya alam.',
          gambar: 'https://i.ibb.co/T4FrgZN/3.png',
        },
        {
          id: 'tips-XubS',
          judul: 'Tips untuk Menerapkan Prinsip Penghematan Air di Rumah',
          isi: 'Perbaiki Keran Bocor: Segera perbaiki keran yang bocor untuk menghindari pemborosan air yang tidak perlu.\\\n\\\nGunakan Shower yang Hemat Air: Pasang shower dengan aliran air yang hemat untuk mengurangi penggunaan air selama mandi.\\\n\\\nKumpulkan dan Manfaatkan Air Hujan: Pasang tangki penampungan air hujan untuk mengumpulkan air hujan, lalu gunakan air tersebut untuk menyiram tanaman atau keperluan non-potable lainnya.\\\n\\\nGunakan Toilet Hemat Air: Pasang toilet dengan dua tombol pilihan, yang satu untuk pembilasan besar dan yang lainnya untuk pembilasan kecil, sehingga dapat menghemat air setiap kali menggunakan toilet.\\\n\\\nBatasi Waktu Mandi: Kurangi waktu mandi Anda untuk mengurangi penggunaan air.\\\n\\\nTutup Keran Saat Menggosok Gigi: Matikan keran saat menggosok gigi untuk menghemat air yang tidak perlu.\\\n\\\nJaga Kualitas Irigasi: Atur jadwal penyiraman tanaman Anda agar sesuai dengan kebutuhan tanaman, hindari penyiraman berlebih yang dapat menyebabkan pemborosan air.\\\n\\\nGunakan Teknologi Hemat Air: Pasang peralatan rumah tangga seperti mesin cuci dan pengering yang hemat air untuk mengurangi penggunaan air dalam kegiatan sehari-hari.\\\n\\\nTanam Tanaman yang Tahan Kekeringan: Pilih tanaman yang tahan kekeringan untuk halaman Anda, sehingga membutuhkan lebih sedikit air untuk pemeliharaannya.\\\n\\\nEdukasi Keluarga tentang Penghematan Air: Ajak seluruh anggota keluarga untuk berpartisipasi dalam upaya penghematan air dan berbagi informasi serta tips tentang cara mengurangi penggunaan air di rumah.',
          gambar: 'https://i.ibb.co/1mdBXvy/save-water.jpg',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tips', null, {});
  },
};
