import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm"
import {v4 as uuid} from "uuid"
import {User} from "./User"
import {Chat} from "./Chat"


@Entity('message')
class Message{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    author_id: string;

    @JoinColumn({name:"author_id"})
    @ManyToOne(() => User)
    authorId: User;

    @Column()
    chat_id: string;

    @JoinColumn({name:'chat_id'})
    @ManyToOne(() => Chat)
    chatId: Chat;

    @Column()
    message:string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}
export {Message}