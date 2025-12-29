import { Router } from "express";
import {sendMessage} from './services/message.service.js'
import {authentication, authorization} from '../../middleware/auth.middleware.js'

const router = Router();

router.post('/sendMessage', authentication, authorization(['user', 'admin']), sendMessage)

export default router;