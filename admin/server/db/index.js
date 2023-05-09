const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://brad123:brad123@cluster0.3f2cx.mongodb.net/moviesapp?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
