const app = require('./app');
const connection = require('./models/connection');

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  const [result] = await connection.execute('SELECT * FROM cars');
  console.log(`RUN SERVER ${PORT}`);
  if (result.length) { console.log('DATABASE CONNECTION: OK'); }
});
