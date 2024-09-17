import express from 'express';
import { list, post, read, remove, update, userById } from '../controllers/user'
import router from './product'

const router = express.Router()

router.get('/users', list)
router.post('/users', post)
router.put('/users/:id', update)
router.get('/users/:id', read)
router.delete('/users/:id', remove)
router.param('userId', userById)

export default router