const express = require ('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, '/public/img')));

const db = require('./app/models');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log('Cannot connect to the database', err);
        process.exit();
    })

app.get('/', (req, res) =>{
    res.json({
        message: 'Welcome to our Web'
    })
})


require('./app/routes/product.routes')(app);
require('./app/routes/order.route')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})