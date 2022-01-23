import {getCustomRepository} from 'typeorm'
import {MessageRepository} from '../repositories/MessageRepository'
import {UserRepository} from '../repositories/UserRepository'

interface IMessageRequest {
	author_id:string;
	chat_id:string;
	message:string;
}
class CreateMessageService{
	async execute({author_id,chat_id,message}:IMessageRequest){
		const messageRepository = getCustomRepository(MessageRepository)
		const point  = messageRepository.create({
			author_id,
			chat_id,
			message,
		})
		await messageRepository.save(point)

		return point
	}
}
export {CreateMessageService}