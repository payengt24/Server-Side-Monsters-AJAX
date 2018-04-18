const express = require('express');
const app= express();
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/', (req, res) => {
    console.log('Server Side Working')
    res.send('Hello World')
});

app.get('/monster', (req,res) =>{
    const monster = ['Big Foot', 'Loch Ness Monster', 'Mike', 'Sully']
    res.send(monster);
})

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})
