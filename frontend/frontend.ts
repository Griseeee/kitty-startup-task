import express, { Request, Response } from 'express';

const port: number = 3000;
const backendUrl = "http://backend:3001";

const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', async (req: Request, res: Response) => {
    try {
        const cat_data = await fetch(`${backendUrl}/cat_get`);
        const data = await cat_data.text();
        res.render('index.jade', { title: "KITTY Frontend", cat_url: data });
    } catch (err) {
        res.status(500).send("Error fetching cat: " + err);
    }
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`);
});
