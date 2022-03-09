const express = require ('express'); 
const app = express(); 
const path = require('path'); 
const port = 3030; 

app.use(express.static(path.join('public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
}); 
app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
}); 

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'contact.html'))
}); 

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'notfound.html'))
}); 
app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`);
})