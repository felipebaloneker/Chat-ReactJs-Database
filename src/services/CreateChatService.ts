import { getCustomRepository } from "typeorm";
import { ChatRepository } from "../repositories/ChatRepository";

interface IChatRequest{
    user_one:string;
    user_two:string;
}

class CreateChatService{
    async execute({user_one, user_two}:IChatRequest){
        const chatRepository = getCustomRepository(ChatRepository)
        const chat = chatRepository.create({user_one, user_two})
        const chatExists = await chatRepository.findOne({
            where:{
                user_one,
                user_two,
            }
        });
        if(user_one == user_two){
            throw new Error('Incorrect Users');
        }
        const chatExist = await chatRepository.findOne({
            where:{
                user_one:user_two,
                user_two:user_one,
            }
        })

        if(!chatExists && chatExist){
            return chatExist
        }
        else if(chatExists && !chatExist){
            return chatExists
        }
        else{
            await chatRepository.save(chat)
        }
        
        return chat
    }
}
export {CreateChatService}