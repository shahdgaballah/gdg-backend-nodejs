//subrouting
import { signUpService, logInService } from "./services/auth.service.js"; //destructing
//or

import { Router } from "express";
const router = Router();

router.post('/register', signUpService);
router.post('/login', logInService);


export default router;