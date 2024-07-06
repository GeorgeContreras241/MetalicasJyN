import { Router } from "express"
import { register, login, logout, verifyToken } from "../controllers/auth.controller.js"
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";

const router = Router()

router.post("/register", validateSchema(registerSchema), register);
router.post("/login",  login);
router.get("/verify", verifyToken);
router.post("/logout", verifyToken, logout);


export default router