import express from "express"
import {createCompany, readCompany, updateCompany, deleteCompany, readAllcompany} from "../controllers/companyController.js"

const companyRouter = express.Router()

companyRouter.post("/", (req, res)=>{
    createCompany(req, res)
})

companyRouter.get("/", (req, res) =>{
    readCompany(req, res)
})

companyRouter.patch("/:nit", (req, res) =>{
    updateCompany(req, res)
})

companyRouter.delete("/", (req, res) =>{
    deleteCompany(req, res)
})

companyRouter.get("/all", (req, res) =>{
    readAllcompany(req, res)
})

export default companyRouter