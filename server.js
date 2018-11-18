const express =  require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/route/:name', (req,res) => {
    console.log(req.params.name);
    res.send('ping ' + req.params.name);   
});

app.listen(3030, () => {
    console.log('listening on 3030');
});