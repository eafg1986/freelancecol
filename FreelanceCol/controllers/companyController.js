import companyModel from "../models/companyModel.js"

export async function createCompany(req, res){
    const empresa = req.body.empresa

    let documento

    try {
        documento = await companyModel.create(empresa)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}

export async function readCompany(req, res){
    const nit = req.body.nit

    let documento

    try {
        documento = await companyModel.findOne({"nit":nit })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

export async function updateCompany(req, res){
    const nit = req.params.nit
    const updates = req.body.updates

    let documento = null

    try {
        documento = await companyModel.updateOne({"nit": nit}, updates,{runValidators:true})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)
}

export async function deleteCompany(req, res){
    const nit = req.body.nit

    let documento = null

    try {
        documento = await companyModel.deleteOne({"nit": nit})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)
}

export async function readAllcompany(req, res){

    let documentos;

    try {
        documentos = await companyModel.find()
    } catch (error) {
        
    }
    res.json(documentos)
}