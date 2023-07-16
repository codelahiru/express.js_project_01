const express = require('express');

const app = express();

// create a route
app.get('/', (req, res) => {           // 'req' is request and 'res' is response
    res.send('<h1>Hello World!!!</h1>');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



