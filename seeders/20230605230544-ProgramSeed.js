'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Programs',
      [
        {
          id: 'program-7yKz',
          judul: 'Program Pengelolaan Air',
          isi: 'Program ini bertujuan untuk melindungi dan mengelola sumber daya air dengan bijaksana. Program ini meliputi upaya konservasi air, pengelolaan daerah aliran sungai, pengolahan air limbah, dan pemberdayaan masyarakat untuk penggunaan air yang hemat.',
          gambar: 'https://i.ibb.co/6Z8qXLV/Program-Pengurangan-Emisi-Gas-Rumah-Kaca.jpg',
          waktu: 'selasa, 27 Juni 2023 02:00 - 16:30 WIB',
          link: 'https://meet.google.com/9211kdad863',
        },
        {
          id: 'program-8DSR',
          judul: 'Program Pendidikan Lingkungan',
          isi: 'Program ini bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga lingkungan. Program ini melibatkan penyuluhan dan pelatihan tentang praktik-praktik ramah lingkungan, seperti penghematan energi, pengelolaan limbah, dan penggunaan bahan-bahan organik.',
          gambar: 'https://i.ibb.co/LSnq2qq/Program-Pendidikan-Lingkungan.jpg',
          waktu: 'selasa, 28 Juni 2023 08:00 - 11:00 WIB',
          link: 'https://meet.google.com/9876eqsae21',
        },
        {
          id: 'program-AcNZ',
          judul: 'Program Pengelolaan Limbah',
          isi: 'Program ini bertujuan untuk mengelola limbah dengan cara yang aman dan ramah lingkungan. Hal ini melibatkan pengumpulan, pemilahan, daur ulang, dan pembuangan limbah yang tepat. Program ini juga dapat melibatkan penggunaan teknologi hijau, seperti sistem daur ulang air, penggunaan energi terbarukan, dan pengurangan penggunaan bahan kimia berbahaya.',
          gambar: 'https://i.ibb.co/bgp4B2M/Program-pengelolaan-limbah.jpg',
          waktu: 'selasa, 28 Juni 2023 13:00 - 16:00 WIB',
          link: 'https://meet.google.com/123456789',
        },
        {
          id: 'program-eYAK',
          judul: 'Program Penghijauan Kota',
          isi: 'Program ini bertujuan untuk meningkatkan kualitas udara, mengurangi suhu permukaan, dan meningkatkan estetika kota melalui penanaman pohon dan penataan ruang hijau. Program ini juga dapat melibatkan pendirian taman-taman kota, taman komunitas, dan pelestarian ruang terbuka hijau.',
          gambar: 'https://i.ibb.co/wcQrNHP/Program-Penghijauan-Kota.jpg',
          waktu: 'Rabu, 29 Juni 2023 09:00 - 12:00 WIB',
          link: 'https://meet.google.com/9876eqsae43',
        },
        {
          id: 'program-GLqk',
          judul: 'Program Konservasi Sumber Daya Alam',
          isi: 'Program ini bertujuan untuk melindungi sumber daya alam seperti hutan, sungai, dan lahan basah. Program ini melibatkan kegiatan penanaman kembali pohon, pemulihan habitat alami, pemantauan keanekaragaman hayati, dan pengaturan penggunaan sumber daya alam yang berkelanjutan.',
          gambar: 'https://i.ibb.co/fxpLHkm/Program-Konservasi-Sumber-Daya-Alam.jpg',
          waktu: 'senin, 26 Juni 2023 10:00 - 13:00 WIB',
          link: 'https://meet.google.com/987654qe21',
        },
        {
          id: 'program-sdf1',
          judul: 'Program Penebangan Hutan',
          isi: 'Penebangan hutan adalah salah satu masalah besar yang mengancam kelestarian alam kita. Kami mengajak Anda untuk bergabung dalam program ini untuk mendukung kampanye perlindungan hutan dan menyelamatkan lingkungan.\n\nBersama-sama, kita dapat melakukan langkah konkret untuk menghentikan penebangan liar dan mengembangkan solusi berkelanjutan bagi kehidupan di planet ini.',
          gambar: 'https://i.ibb.co/3vN9Zxf/program-penebangan-hutan.jpg',
          waktu: 'Senin, 05 Juni 2023 08:00 - 11:00 WIB',
          link: 'https://meet.google.com/123456789',
        },
        {
          id: 'program-jd2b',
          judul: 'Program Daur Ulang',
          isi: 'Daur ulang adalah salah satu cara yang efektif untuk mengurangi sampah dan mengurangi dampak negatif terhadap lingkungan. Bergabunglah dalam program ini dan mari kita bersama-sama melakukan daur ulang untuk menjaga bumi kita.\n\nMelalui program ini, kami akan memberikan pelatihan dan panduan praktis tentang cara mendaur ulang dengan benar serta memperkenalkan konsep lingkungan yang lebih ramah.',
          gambar: 'https://i.ibb.co/CBk5WNL/program-daur-ulang.jpg',
          waktu: 'Rabu, 07 Juni 2023 09:00 - 12:00 WIB',
          link: 'https://meet.google.com/987654321',
        },
        {
          id: 'program-k2fm',
          judul: 'Program Edukasi Lingkungan',
          isi: 'Pendidikan dan kesadaran tentang lingkungan sangat penting dalam upaya menjaga kelestarian alam. Gabunglah dengan program ini dan ikuti sesi edukasi lingkungan kami untuk belajar lebih banyak tentang bagaimana kita dapat menjaga bumi kita.\n\nKami akan membahas topik-topik seperti keanekaragaman hayati, perubahan iklim, polusi, dan langkah-langkah yang dapat kita ambil untuk mendorong perubahan positif dalam kehidupan sehari-hari.',
          gambar: 'https://i.ibb.co/h8gHF47/program-edukasi-lingkngan.jpg',
          waktu: 'Jumat, 09 Juni 2023 10:00 - 13:00 WIB',
          link: 'https://meet.google.com/567891234',
        },
        {
          id: 'program-Y12B',
          judul: 'Program Pengurangan Emisi Gas Rumah Kaca',
          isi: 'Program ini bertujuan untuk mengurangi emisi gas rumah kaca yang berkontribusi terhadap perubahan iklim. Program ini dapat mencakup penggunaan energi terbarukan, peningkatan efisiensi energi, pengurangan penggunaan kendaraan bermotor, dan promosi transportasi ramah lingkungan seperti bersepeda atau menggunakan transportasi umum.\n',
          gambar: 'https://i.ibb.co/6Z8qXLV/Program-Pengurangan-Emisi-Gas-Rumah-Kaca.jpg',
          waktu: 'jumat, 23 Juni 2023 08:00 - 11:00 WIB',
          link: 'https://meet.google.com/9823vfrs23',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Programs', null, {});
  },
};
