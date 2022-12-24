import vacantModel from "../models/vacantModel.js";

export async function createVacant(req, res) {
  try {
    const { vacant } = req.body;
    const document = await vacantModel.create(vacant);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}


export async function readVacnt(req, res) {
  const { name } = req;

  try {
    const documents = await vacantModel.find({
      $or: [{ from: name }, { to: name }],
    });
    res.status(200).json(documents);
  } catch (error) {
    res.status(400).json(error.message);
  }
}