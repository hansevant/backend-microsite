import  express  from "express";
import { index, login, show } from '../handlers/users.js';

const router = express.Router()

router.post('/',login)
router.get('/',index)
router.get('/:id',show)

export default router