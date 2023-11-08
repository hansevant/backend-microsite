import  express  from "express";
import { store } from "../handlers/contact.js";

const router = express.Router()

router.post('/',store)

export default router