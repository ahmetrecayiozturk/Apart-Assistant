const connection = require('./DatabaseService/connect.js');
const app = require('./app');
connection();

app.get('/', (req, res) => {
    res.send("this server is working bro");
});

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

