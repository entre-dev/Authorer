import express from 'express';
import * as controller from '../controllers/user.cont';
import auth from '../middleware/passport';

const route = express.Router();

export default route;