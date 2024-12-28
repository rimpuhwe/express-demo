require('dotenv').config();

const express = require('express');
const app = express();

app.use(express(JSON));
const courses = [
    {id: 1, name: 'HTML & CSS'},
    {id: 2, name: 'JavaScript'},
    {id: 3, name: 'Node.js'},
];
app.get('/', (req, res) => {
    res.send('Hello, World!. meet me');
})
// app.get('/api/course', (req, res) => {
//     res.send(JSON.stringify(courses));
// })
//route parameters and hadling the GET methods
app.get('/api/course/:courseID', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.courseID));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.');
    }
    else{
        res.send(course);
    }

})
//handling the POST methods
app.post('/api/course', (req, res) =>{
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(newCourse);
    res.send(newCourse);
})
// setting default value of port rather than 3000
const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);  
})