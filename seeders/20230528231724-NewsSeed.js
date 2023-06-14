'use strict';
const dayjs = require('dayjs');
require('dayjs/locale/id');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          id: 'news-0MJc',
          judul: 'Universitas Terkemuka Mengadopsi Sistem Energi Terbarukan untuk Mengurangi Emisi Karbon',
          isi: 'Sebuah universitas terkemuka di negara ini telah mengambil langkah besar dalam mengurangi emisi karbon dengan mengadopsi sistem energi terbarukan. Dalam upaya untuk mencapai tujuan keberlanjutan dan menjadi contoh dalam praktik lingkungan, universitas ini telah beralih sepenuhnya ke sumber energi yang bersih dan ramah lingkungan./n/nDengan meluncurkan proyek energi terbarukan yang ambisius, universitas tersebut telah memasang panel surya di atap gedung-gedung kampus dan mengembangkan turbin angin di sekitar area kampus. Selain itu, mereka juga menjalin kemitraan dengan penyedia energi terbarukan untuk membeli energi hijau tambahan yang diperlukan untuk operasional kampus./n/nPeralihan ke energi terbarukan ini diperkirakan dapat mengurangi emisi karbon universitas sebanyak 50 persen dalam satu tahun. Selain itu, universitas juga memprioritaskan efisiensi energi dengan mengganti peralatan dan sistem pencahayaan dengan yang lebih hemat energi./n/nDalam pernyataan resmi, rektor universitas mengatakan, "Komitmen kami terhadap keberlanjutan sangat penting. Mengadopsi sumber energi terbarukan adalah langkah penting dalam menciptakan masa depan yang lebih hijau dan berkelanjutan. Kami berharap dapat menginspirasi universitas lain dan masyarakat luas untuk mengikuti jejak kami."/n/nDengan langkah ini, universitas tersebut tidak hanya mengurangi dampak lingkungan negatif, tetapi juga mengedukasi mahasiswa dan masyarakat tentang manfaat energi terbarukan. Inisiatif ini menunjukkan tanggung jawab universitas sebagai lembaga pendidikan dalam menjaga keberlanjutan lingkungan dan memberikan contoh positif bagi generasi muda.',
          gambar: 'https://i.ibb.co/q5SSW2p/Mengurangi-Emisi-Karbon.jpg',
          waktu: '14-Juni-2023 12:19:34',
        },
        {
          id: 'news-3g7s',
          judul: 'Perubahan Iklim: Tantangan Besar yang Menghadang Kehidupan Bumi',
          isi: 'Perubahan iklim merupakan salah satu tantangan terbesar yang dihadapi oleh manusia dan kehidupan di Bumi. Dampak dari perubahan iklim sangat luas dan dapat mempengaruhi berbagai aspek kehidupan, termasuk kesehatan, ekonomi, dan lingkungan. Salah satu efek yang paling terlihat adalah peningkatan suhu rata-rata global. Hal ini mengakibatkan pencairan es di kutub, naiknya permukaan air laut, dan intensitas cuaca yang ekstrem. Banyak spesies hewan dan tumbuhan yang terancam punah karena habitat alaminya terganggu.\n\nDalam menghadapi tantangan perubahan iklim, organisasi seperti Greenpeace memainkan peran penting dalam meningkatkan kesadaran publik, melakukan penelitian ilmiah, dan melakukan advokasi kebijakan. Mereka berupaya untuk mendorong negara-negara dan perusahaan agar mengurangi emisi gas rumah kaca, memperkuat energi terbarukan, dan melindungi ekosistem penting di seluruh dunia.\n\nKesadaran akan perubahan iklim juga penting bagi setiap individu. Tindakan sehari-hari seperti mengurangi penggunaan energi fosil, memilih transportasi ramah lingkungan, dan mendukung produk-produk yang berkelanjutan dapat membantu mengurangi dampak negatif perubahan iklim. Dalam menjaga keberlanjutan planet ini, kolaborasi dan aksi kolektif sangat diperlukan.',
          gambar: 'https://i.ibb.co/CMk61Fw/perubahan-iklim.jpg',
          waktu: '11-Juni-2023 15:42:08',
        },
        {
          id: 'news-6eg8',
          judul: 'Pencemaran Laut: Krisis Global yang Mengancam Ekosistem dan Manusia',
          isi: 'Pencemaran laut merupakan krisis global yang mengancam ekosistem laut dan kesehatan manusia. Peningkatan polusi dari limbah industri, pembuangan sampah plastik, dan aktivitas perkapalan telah menyebabkan kerusakan yang serius terhadap laut dan makhluk hidup di dalamnya. Hewan-hewan laut sering kali terjebak dalam sampah plastik atau terkena dampak zat beracun yang terlarut dalam air laut. \n\nOrganisasi lingkungan seperti Greenpeace melakukan kampanye untuk menghentikan pencemaran laut dan melindungi ekosistem laut yang rapuh. Mereka mendesak pemerintah dan industri untuk mengurangi penggunaan plastik sekali pakai, meningkatkan sistem pengolahan limbah, dan melindungi kawasan laut yang kritis. \n\nSebagai individu, kita juga dapat berperan dengan mengurangi penggunaan plastik sekali pakai, mendukung kebijakan pengelolaan sampah yang baik, serta ikut serta dalam kegiatan pembersihan pantai dan laut. Melindungi laut adalah tanggung jawab bersama, dan langkah-langkah kita hari ini akan berdampak pada kelestarian laut dan kehidupan di masa depan.',
          gambar: 'https://i.ibb.co/P9Q1Ypp/pencemaran-laut.jpg',
          waktu: '11-Juni-2023 15:42:08',
        },
        {
          id: 'news-g2ad',
          judul: 'Dampak Penebangan Hutan: Ancaman bagi Keanekaragaman Hayati dan Manusia',
          isi: 'Penebangan hutan telah menjadi salah satu masalah lingkungan yang mendesak di seluruh dunia. Dampaknya sangat merugikan keanekaragaman hayati, menghancurkan habitat satwa liar, dan menyebabkan kerugian ekonomi yang signifikan. Penebangan hutan juga berkontribusi terhadap perubahan iklim, karena pohon-pohon yang ditebang tidak dapat lagi menyerap karbon dioksida dari atmosfer.\n\nOrganisasi lingkungan seperti Greenpeace berusaha untuk menghentikan penebangan hutan yang tidak bertanggung jawab melalui kampanye dan advokasi. Mereka mendesak perusahaan dan pemerintah untuk menerapkan praktik penebangan yang berkelanjutan dan melindungi hutan-hutan penting di seluruh dunia. \n\nSebagai individu, kita juga dapat berkontribusi dengan cara menggunakan produk-produk kayu yang berasal dari sumber yang berkelanjutan, mendukung program penanaman kembali hutan, dan memilih bahan bangunan alternatif yang ramah lingkungan. Langkah-langkah kecil ini dapat membantu mempertahankan keanekaragaman hayati dan melindungi masa depan planet ini.',
          gambar: 'https://i.ibb.co/x3j2Nm0/penebangan-hutan.jpg',
          waktu: '11-Juni-2023 15:42:08',
        },
        {
          id: 'news-iW6T',
          judul: 'Pemerintah Kota Menerapkan Program Tanam Pohon Massal untuk Mengatasi Pemanasan Global',
          isi: 'Pemerintah Kota XYZ telah meluncurkan program tanam pohon massal yang bertujuan untuk mengatasi pemanasan global dan meningkatkan kualitas udara di wilayah tersebut. Program ini melibatkan partisipasi aktif dari warga dan komunitas setempat dalam upaya menjaga keberlanjutan lingkungan./n/nDalam program ini, pemerintah setempat menyediakan bibit pohon kepada masyarakat secara gratis dan memberikan dukungan teknis untuk penanaman yang efektif. Warga didorong untuk menanam pohon di pekarangan rumah, taman, dan area publik yang tersedia.\n/n/nSelain memberikan manfaat lingkungan seperti penyerapan karbon dan penghasilan oksigen, pohon-pohon yang ditanam juga berperan dalam mencegah erosi tanah, meningkatkan kualitas air, dan memberikan habitat bagi keanekaragaman hayati lokal./n/nPemerintah Kota XYZ juga menyelenggarakan acara kampanye dan pelatihan untuk meningkatkan kesadaran masyarakat tentang manfaat penting dari penanaman pohon. Mereka berharap program ini dapat menginspirasi masyarakat untuk mengambil tindakan nyata dalam menjaga lingkungan di sekitar mereka./n/nWalikota XYZ, dalam pernyataan resminya, menyatakan, "Program tanam pohon massal ini merupakan langkah konkret dalam menghadapi pemanasan global dan menjaga kualitas udara yang sehat. Kami mengajak seluruh warga untuk bergabung dalam upaya ini dan berperan dalam menjaga keberlanjutan kota kita."/n/nProgram tanam pohon massal ini mencerminkan upaya pemerintah kota dalam memobilisasi masyarakat untuk ikut serta dalam menjaga lingkungan dan menghadapi perubahan iklim. Dengan melibatkan warga secara aktif, program ini tidak hanya memberikan manfaat lingkungan, tetapi juga membangun kesadaran kolektif akan pentingnya menjaga keberlanjutan lingkungan hidup.',
          gambar: 'https://i.ibb.co/9wLfRh0/planting.jpg',
          waktu: '14-Juni-2023 12:31:55',
        },
        {
          id: 'news-w_wT',
          judul: 'Konservasi Laut: Organisasi Lingkungan Memperluas Wilayah Perlindungan di Terumbu Karang Terbesar Dunia',
          isi: 'Sebuah organisasi lingkungan terkemuka telah berhasil memperluas wilayah perlindungan di terumbu karang terbesar dunia, yang merupakan rumah bagi keanekaragaman hayati laut yang luar biasa. Langkah ini diambil untuk memastikan keberlanjutan terumbu karang dan melindungi ekosistemnya dari ancaman seperti perubahan iklim dan kegiatan manusia./n/nOrganisasi ini bekerja sama dengan pemerintah lokal dan komunitas nelayan untuk memperkuat langkah-langkah perlindungan dan membangun kesadaran akan pentingnya menjaga kelestarian terumbu karang. Melalui konsultasi dan kolaborasi, mereka berhasil menetapkan zona perlindungan baru yang mencakup area yang sebelumnya tidak terlindungi./n/nWilayah perlindungan baru ini melarang praktik-praktik yang merusak, seperti penangkapan ikan yang tidak berkelanjutan, penggunaan bahan kimia berbahaya, dan kerusakan fisik terhadap terumbu karang. Selain itu, organisasi ini juga memberikan pelatihan kepada nelayan setempat tentang praktik penangkapan ikan yang bertanggung jawab dan berkelanjutan./n/nDalam sebuah pernyataan, direktur organisasi tersebut mengatakan, "Konservasi terumbu karang merupakan tanggung jawab bersama kita. Dengan memperluas wilayah perlindungan, kami berharap dapat menjaga keanekaragaman hayati laut dan mendukung mata pencaharian berkelanjutan masyarakat lokal."/n/nLangkah ini menunjukkan betapa pentingnya upaya perlindungan dan pelestarian terumbu karang di tengah ancaman perubahan iklim dan aktivitas manusia yang merusak. Melalui kerjasama antara organisasi lingkungan, pemerintah, dan komunitas lokal, kita dapat memastikan bahwa keindahan dan keberlanjutan terumbu karang terjaga untuk generasi mendatang.',
          gambar: 'https://i.ibb.co/wcrSCyg/konservasi-laut.jpg',
          waktu: '14-Juni-2023 12:12:25',
        },
        {
          id: 'news-z3zS',
          judul: 'Inovasi Ramah Lingkungan: Startup Membuat Baterai Daur Ulang dari Limbah Elektronik',
          isi: 'Sebuah startup inovatif telah mengembangkan teknologi baru yang menggunakan limbah elektronik untuk membuat baterai daur ulang. Proyek ini bertujuan untuk mengatasi dua masalah sekaligus, yaitu pengelolaan limbah elektronik yang berkelanjutan dan kebutuhan akan baterai yang ramah lingkungan./n/nStartup ini, yang dikenal dengan nama "EcoBatt", menggunakan limbah elektronik yang biasanya menjadi sumber polusi lingkungan dan dampak negatif terhadap kesehatan manusia. Mereka mengolah limbah tersebut menjadi bahan baku untuk produksi baterai daur ulang yang aman dan efisien./n/nTeknologi EcoBatt tidak hanya mengurangi volume limbah elektronik yang dikirim ke tempat pembuangan akhir, tetapi juga mengurangi ketergantungan pada bahan baku baru yang diekstraksi dari lingkungan. Dalam uji coba awal, baterai daur ulang yang dihasilkan oleh startup ini menunjukkan kinerja yang sebanding dengan baterai konvensional./n/nCEO EcoBatt, Jane Thompson, menjelaskan, "Kami berkomitmen untuk memperbaiki cara kita memandang limbah elektronik dan mengubahnya menjadi sumber energi yang berkelanjutan. Dengan menggunakan teknologi kami, kami dapat meminimalkan dampak negatif limbah elektronik dan memberikan solusi ramah lingkungan dalam industri baterai."/n/nBerita ini memberikan informasi tentang inovasi terkini dalam lingkup teknologi yang berdampak positif terhadap lingkungan. Hal ini juga menyoroti upaya untuk mengubah persepsi dan praktik dalam pengelolaan limbah elektronik, sambil mendorong adopsi teknologi ramah lingkungan di sektor industri yang penting.',
          gambar: 'https://i.ibb.co/mNpfZXg/Startup-Membuat-Baterai-Daur-Ulang-dari-Limbah-Elektronik.jpg',
          waktu: '14-Juni-2023 12:03:40',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  },
};
