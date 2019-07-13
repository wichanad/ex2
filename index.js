const express = require("express")
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('วิชานาถ บุญหมั้น'))
app.get('/about', (req, res) => res.send('อิอิ about'))
app.get('/a', (req, res) => res.send('0841395184'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
