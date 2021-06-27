const authController = require('../controllers/authController');
const playController = require('../controllers/playController');
const homeController = require('../controllers/homeController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/play', playController);
    app.use('/', homeController);
}