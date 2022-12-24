import mongoose from "mongoose"

const vacantSchema = new mongoose.Schema({
    perfil: { type: String, required: true },
    empresa: { type: String, required: true },
    salario: { type: Number, required: true, min: 1000 },
})

export default mongoose.model("vacants", vacantSchema)
