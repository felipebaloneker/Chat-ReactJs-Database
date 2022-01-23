import {Request,Response} from 'express'
import {CreateMessageService} from '../services/CreateMessageService'

class CreateMessageController{
	async handle(request:Request, response:Response){
		const {chat_id,message} = request.body
		const {user_id} = request;
		const createMessageService = new CreateMessageService()

		const mess = await createMessageService.execute({
			chat_id,
			author_id:user_id,
			message,
		})

		return response.json(mess);
	}
}
export {CreateMessageController}