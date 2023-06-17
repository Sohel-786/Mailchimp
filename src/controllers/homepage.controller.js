const express = require('express');
const router = express.Router();

router.get('', async(req, res) => {
    try {
            return res.status(200).render('homepage');
    } catch (err) {
            return res.status(400).send(err.message);
    }
})

module.exports = router;