const mongoose = require('mongoose')
 const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/users')
        console.log("connected to database")
    } catch (error) {
        console.log("Db Error", error)
    }
}
module.exports = connectDb