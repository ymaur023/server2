import express from 'express';
import cors from 'cors';

const app = express();
const port = 10000;
let currentValue = 0;  // Başlangıç değeri olarak 0

// CORS middleware'ini uygula
app.use(cors());
app.use(express.json());


app.use(cors({
  origin: 'https://arcadetablet.vercel.app' // Vercel uygulamanızın URL'si
}));

// API route'ları
app.post('/data', (req, res) => {
  console.log(req.body);
  res.status(200).send('Veri başarıyla alındı');
});



const PORT = process.env.PORT || 10000;

// Sunucu başlatma
app.listen(PORT, (err) => {
    if (err) {
        console.error('Sunucu başlatılamadı:', err);
    } else {
        console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    }
});
