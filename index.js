const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
app.get('/api/course', (req, res) => {
    const courses = [
        {id: 1, name: 'HTML & CSS'},
        {id: 2, name: 'JavaScript'},
        {id: 3, name: 'Node.js'},
    ];
    res.send(JSON.stringify(courses));
})
app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');  
})