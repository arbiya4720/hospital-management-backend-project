import express  from "express";
const app=express()
import { AppDataSource } from "./DbConfig";
import { route } from "./route/router";
import dotenv from "dotenv"
dotenv.config();

const DB=async()=>{
try{
    await AppDataSource.initialize()
    console.log("database connected")
}
catch(err){
    console.log(err)
}
}
DB()
app.use(route)

app.listen(process.env.port,()=>{
    console.log(`server is running on ${process.env.port}` )
})
