import express from "express";
import { Patient } from "../Entities/PatientModel";
import { userLoginController } from "../Controller/CommonContoller/LoginFunctionController";
export const route=express.Router()
//common route
 route.post("./login",userLoginController)
 //doctor route
 //admin route//
 //Patient route