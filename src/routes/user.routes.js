import {Router} from "express"
import { registerUser } from "../controllers/user.controller"
import {upload} from "../middlewares/multer.middleware.js"
i

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name:"coverimage",
            maxcount: 1
        }
    ]),
    registerUser
)


export default router