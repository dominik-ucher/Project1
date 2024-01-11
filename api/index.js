import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import contactRoutes from './routes/contact.js'

const app = express()

app.use(express.json())
app.use("/api", contactRoutes)


app.listen(8800,()=>{
    console.log("Connected!")
})
