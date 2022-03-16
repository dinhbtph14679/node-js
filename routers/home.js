import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.send(`
        <h1 style="color: red">Home Page</h1>
        <p>Content text</p>
        <img src="https://live.staticflickr.com/4200/35328200091_8920666058_b.jpg"/>
    `)
})

export default router;
