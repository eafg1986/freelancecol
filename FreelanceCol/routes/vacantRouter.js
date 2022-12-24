import express from "express"
import { createVacant, readVacnt,   } from "../controllers/vacantController.js"
import { validateToken } from "../modules/authModule.js"

const vacantRouter = express.Router()

vacantRouter.post("/", createVacant)
vacantRouter.get("/:name",validateToken, readVacnt)

export default vacantRouter




