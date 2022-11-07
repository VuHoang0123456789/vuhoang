const express = require("express")
const app = express()
const post = 3000

a =1;
b = 2;
c = a+b;

app.get('/', (req, res)=>res.send('Hello world!'))
app.listen(post, ()=>console.log(`http://localhost:${post}`))


