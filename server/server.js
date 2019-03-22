const express = require('express')

const app = express()
const PORT = 4567
const cc = require('./controllers/customerControllers')


app.use(express.json())


// endpoints from controller file

app.get('/api/customers', cc.get)
app.post('/api/customers', cc.create)
app.put('/api/customers/:id', cc.update)
app.delete('/api/customers/:id', cc.delete)

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})