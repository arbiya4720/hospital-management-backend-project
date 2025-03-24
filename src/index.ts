import express  from "express";
const app=express()
import { AppDataSource } from "./DbConfig";
AppDataSource.initialize().then(()=>{
    console.log("database connected succesfully")
}).catch((err:any)=>{
    console.log(err);
})


app.listen(9000,()=>{
    console.log("server is running")
})
