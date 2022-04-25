const express = require("express")
const app = express()
const connectDB = require("./config/db")
const userRoutes = require("./routes/api/user")


// middleware
app.use(express.json())


app.get("/" , (req , res)=>{
    res.send("Hello world")

})

// database connection
connectDB()


// API
app.use("/users" ,  userRoutes) 

const PORT = 3000 || process.env.PORT
app.listen(PORT ,  ()=>{
    console.log(`Server has started on ${PORT}`)
})