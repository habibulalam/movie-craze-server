const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// initial get method on server start
app.get("/" , (req, res)=> {
    res.send("Server is running")
})



app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})