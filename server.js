const app = require('./index')
const port = process.env.port || 5000;


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
