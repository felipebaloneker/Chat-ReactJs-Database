import {Request, Response} from 'express'
import {ListChatMessagesService} from '../services/ListChatMessagesService'

class ListChatMessageController {
    async handle(request: Request, response: Response){
        const chat_id = request.query.chat_id;
        const parsed = chat_id.toString()
        const listChatMessagesService = new ListChatMessagesService()
        const message = await listChatMessagesService.execute(parsed)

        return response.json(message)
    }
}
export {ListChatMessageController}