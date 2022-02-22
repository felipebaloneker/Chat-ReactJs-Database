import {Router} from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import {CreateMessageController} from './controllers/CreateMessageController';
import {CreateUserController} from './controllers/CreateUserController'
import { CreateChatController } from './controllers/CreateChatController';
import { verifyAuthenticated } from './middlewares/verifyAuthenticated';
import { ListUsersController } from './controllers/ListUsersController';
import { ListChatMessageController } from './controllers/ListChatMessageController';

const routes = Router();

const createUserController = new CreateUserController();
const createMessageController = new CreateMessageController();
const createChatController = new CreateChatController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController()
const listChatMessageController = new ListChatMessageController()

routes.get('/users/list', listUsersController.handle)
routes.get('/chat/messages', listChatMessageController.handle )

routes.post('/login', authenticateUserController.handle);
routes.post('/users/create', createUserController.handle);
routes.post('/message/send',verifyAuthenticated, createMessageController.handle);
routes.post('/chat/create',verifyAuthenticated, createChatController.handle);
export {routes}