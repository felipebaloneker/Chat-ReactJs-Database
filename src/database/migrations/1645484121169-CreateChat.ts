import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChat1645484121169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"chat",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name:"user_one",
                        type:'uuid'
                    },
                    {
                        name:'user_two',
                        type:'uuid'
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("chat")
    }

}
