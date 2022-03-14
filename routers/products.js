import express from 'express';
const router = express.Router();

router.get('/products', (req, res) => {
    res.send(`
        <h1 style="color: red">Products Page</h1>
        <img src="https://i.vietgiaitri.com/2021/1/1/son-tung-m-tp-vua-xuat-hien-luot-xem-livestream-countdown-tang-chong-mat-len-170000-nguoi-626-5485034.png" />
    `)
})

export default router;
