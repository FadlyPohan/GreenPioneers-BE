const Tips = require('../models').Tips;
const { nanoid } = require('nanoid');

const addTipsController = async (req, res) => {
  try {
    const id = nanoid(6);
    const { judul, isi } = req.body;

    // validasi: jika user tidak mengirimkan data tips
    if (!judul || !isi) {
      return res.status(400).json({
        status: 'error',
        message: 'Mohon untuk memasukkan data tips',
      });
    }

    // buat objek new tips
    const newTips = {
      id,
      judul,
      isi,
    };

    // memasukkan data
    await Tips.create(newTips);

    //
    return res.status(201).json({
      message: 'Tips berhasil dibuat',
      data: {
        tipsId: id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getTipsController = async (req, res) => {
  try {
    const tips = await Tips.findAll();
    return res.json(tips);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getTipsByIdController = async (req, res) => {
  try {
    // ambil id dari req.params.id
    const id = req.params.id;

    // cari data berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika tips tidak ditemukan
    if (!tips) {
      // berikan response error
      return res.status(404).json({
        status: 'error',
        message: 'Data tidak ditemukan',
      });
    }

    // berikan response success
    return res.json({
      status: 'success',
      data: {
        tips,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editTipsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params
    const id = req.params.id;
    const { judul, isi } = req.body;

    // cari tips berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika tips tidak ditemukan
    if (!judul || !isi) {
      return res.status(404).json({
        status: 'error',
        message: 'Data tidak ditemukan',
      });
    }

    // mengambil data req.body.tips
    const newTips = req.body;

    // validasi: jika tidak mengirimkan data tips
    if (!newTips) {
      return res.status(400).json({
        status: 'error',
        message: 'Mohon untuk memasukkan data tips yang baru',
      });
    }

    // buat new objek toto
    const newObjectTips = {
      id,
      judul,
      isi,
    };

    // proses update
    await Tips.update(newObjectTips, {
      where: {
        id: id,
      },
    });

    // berikan response success
    return res.json({
      status: 'success',
      message: 'Data berhasil diubah',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTipsByIdController = async (req, res) => {
  try {
    // mengambil id dari req.params.id
    const id = req.params.id;

    // cari data berdasarkan id
    const tips = await Tips.findOne({
      where: {
        id: id,
      },
    });

    // validasi: jika data tips tidak ditemukan
    if (!tips) {
      return res.status(404).json({
        status: 'error',
        message: 'Data tidak titemukan',
      });
    }

    // proses hapus
    await Tips.destroy({
      where: {
        id: id,
      },
    });

    // berikan response success
    return res.json({
      status: 'success',
      message: 'Data berhasil dihapus',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addTipsController,
  getTipsController,
  getTipsByIdController,
  editTipsByIdController,
  deleteTipsByIdController,
};
