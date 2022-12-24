import mongoose from "mongoose";

const companyModel = mongoose.Schema({
  nit: { type: Number, required: true, unique: true },
  razonSocial: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  ciudad: { type: String, required: true },
});

export default mongoose.model("companys", companyModel);
