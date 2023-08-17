import  express  from "express";
import { login, show } from '../handlers/users.js';

const router = express.Router()

router.post('/',login)
router.get('/:id',show)

export default router