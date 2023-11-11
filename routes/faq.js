import  express  from "express";
import { index } from "../handlers/faq.js";

const router = express.Router()

router.get('/',index)

export default router