import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/stillinprogress.html');
});



app.listen(port, () => {
    console.log(`Server is running on :${port}`);
});  