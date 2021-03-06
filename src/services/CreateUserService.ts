import {hash} from 'bcryptjs';
import {getCustomRepository} from 'typeorm';
import {UserRepository} from '../repositories/UserRepository'

interface IUserRequest{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({name, email, password}:IUserRequest){
        const usersRepository = getCustomRepository(UserRepository);
        if(!email){
            throw new Error('Email incorrect');
        }
        const userAlreadyExists = await usersRepository.findOne({email})

        if(userAlreadyExists){
            throw new Error('User already exists')
        }
        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            password:passwordHash
        })
        await usersRepository.save(user)
        return user;
    }
}

export {CreateUserService}