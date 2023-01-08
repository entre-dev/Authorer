import express from 'express';
import * as controller from '../controllers/auth.cont';

const route = express.Router();

route.post('/register', controller.signUp)

export default route;