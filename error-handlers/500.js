'use strict';

module.exports = (err, req, res) => {
    res.status(500).send({
        code: 500,
        message: `Server Error: ${err.message || err}`
    });
};