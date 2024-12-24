require('dotenv').config();

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!. meet me');
})
app.get('/api/course', (req, res) => {
    const courses = [
        {id: 1, name: 'HTML & CSS'},
        {id: 2, name: 'JavaScript'},
        {id: 3, name: 'Node.js'},
    ];
    res.send(JSON.stringify(courses));
})
// setting default value of port rather than 3000
const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);  
})