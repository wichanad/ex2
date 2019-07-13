const express = require("express")
const app = express();
const port = 3000



app.get('/', (req, res) => res.send('วิชานาถ บุญหมั้น'))
app.get('/about', (req, res) => res.send('อิอิ about'))
app.get('/test', (req, res) =>{
    res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
