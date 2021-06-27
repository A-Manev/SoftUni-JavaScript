const playService = require('../services/play');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...playService,
    };

    next();
}