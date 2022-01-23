import {getCustomRepository} from 'typeorm'
import {MessageRepository} from '../repositories/MessageRepository'

class ListChatMessagesService{
    async execute(chat_id:string){
        const messageRepository = getCustomRepository(MessageRepository)
        const message = await messageRepository.find({
            where:{
                chat_id
            }
        })

        return message;
    }

}
export {ListChatMessagesService}