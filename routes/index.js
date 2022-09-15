const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            ok: true,
            msg: 'Server working.'
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;