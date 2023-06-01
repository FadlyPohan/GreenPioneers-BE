const express = require('express');
// const authenticateToken = require('../middleware/authenticateToken');
const { addTipsController, getTipsController, getTipsByIdController, editTipsByIdController, deleteTipsByIdController } = require('../controllers/tipsController');

const tipsRoute = express.Router();

tipsRoute.post('/tips', addTipsController);
tipsRoute.get('/tips', getTipsController);
tipsRoute.get('/tips/:id', getTipsByIdController);
tipsRoute.put('/tips/:id', editTipsByIdController);
tipsRoute.delete('/tips/:id', deleteTipsByIdController);

module.exports = tipsRoute;
