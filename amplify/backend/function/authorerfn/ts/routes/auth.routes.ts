import express from 'express';
import * as controller from '../controllers/auth.cont';
import auth from '../middleware/passport';

const route = express.Router();

route.post('/register', controller.signUp)
route.post('/login', controller.signIn)
route.post('/dev/register', auth, controller.signUpDeveloper)

export default route;