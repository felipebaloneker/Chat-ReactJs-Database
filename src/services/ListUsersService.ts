import { UserRepository } from "../repositories/UserRepository";
import {getCustomRepository} from "typeorm"

class ListUsersService{
    async execute(){
        const usersRepository = getCustomRepository(UserRepository);
        const userList = await usersRepository.find()
        return userList;
    }
}

export{ListUsersService}