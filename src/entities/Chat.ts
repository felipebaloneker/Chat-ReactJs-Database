import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm"
import {v4 as uuid } from 'uuid'

@Entity('chat')
class Chat{
    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    user_one:string;
    
    @Column()
    user_two:string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
export {Chat}