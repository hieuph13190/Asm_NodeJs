import express from 'express';
import { add, list, read, remove, update } from '../controllers/categories';
import { userById } from '../controllers/user'

const router = express.Router();

router.post("/category", add);
router.get("/category/:id", read);
router.get("/category", list);
router.delete("/category/:id", remove)
router.put("/category/:id", update)

router.param('userId', userById)
export default router;