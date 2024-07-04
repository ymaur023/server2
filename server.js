import express from 'express';
import cors from 'cors';

const app = express();
const port = 10000;
let currentValue = 0;  // Başlangıç değeri olarak 0

// CORS middleware'ini uygula
app.use(cors());
app.use(express.json());
app.get('/update-button', (req, res) => {
  const buttonValue = req.query.value;  // Query parametresinden buton değerini alır
  currentValue = buttonValue;  // Alınan değeri güncel değer olarak sakla
  console.log('Current button value updated to:', currentValue);
  res.send(`Current button value is now: ${currentValue}`);  // Cevap olarak güncel değeri geri gönder
});


app.get('/current-value', (req, res) => {
  res.send(`Current button value is: ${currentValue}`);  // Güncel değeri geri döndür
  console.log('Current button value is:', currentValue);
});

app.use(cors({
  origin: 'https://arcadetablet.vercel.app' // Vercel uygulamanızın URL'si
}));

// API route'ları
app.post('/data', (req, res) => {
  console.log(req.body);
  res.status(200).send('Veri başarıyla alındı');
});


const server=app.listen(process.env.PORT || 10000,()=>{
  if(err){
    console.log(err);

  }
  else{
    console.log('Server is running on port',server.address().port);
  }
}
);
