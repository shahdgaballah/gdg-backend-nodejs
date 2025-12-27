//subrouting
import {authentication, authorization} from "../../middleware/auth.middleware.js"
import { Router } from "express";
import * as userService from './user.services.js'
const router = Router();

router.get('/profile', authentication, authorization(['user', 'admin']), userService.getuserProfile)  

router.patch('/updateProfile',authentication, authorization(['user', 'admin']), userService.updateuserProfile)

router.patch('/updatePassword',authentication, authorization(['user', 'admin']), userService.updatePassword)

export default router