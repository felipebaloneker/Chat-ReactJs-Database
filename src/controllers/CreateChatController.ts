import {Request, Response} from 'express'
import { CreateChatService } from '../services/CreateChatService'

class CreateChatController{
    async handle(request:Request, response:Response){
        const {user_one, user_two} = request.body;
        const createCharService = new CreateChatService;

        const chat = await createCharService.execute({user_one,user_two})
        return response.json(chat)
    }
}
export {CreateChatController}