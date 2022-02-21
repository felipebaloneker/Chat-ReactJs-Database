import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessage1645484193789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'message',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'author_id',
                        type:'uuid',
                    },
                    {
                        name:'chat_id',
                        type:'uuid',
                    },
                    {
                        name:'message',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ],
                foreignKeys:[{
                    name:'FKUserSenderMessage',
                    referencedTableName: 'users',
                    referencedColumnNames:['id'],
                    columnNames:["author_id"],
                    onDelete:"SET NULL",
                    onUpdate:"SET NULL"
                },
                {
                    name:'FKUserReceiverMessage',
                    referencedTableName:'chat',
                    referencedColumnNames:['id'],
                    columnNames:['chat_id'],
                    onDelete:'SET NULL',
                    onUpdate:'SET NULL'
                }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('message')
    }

}
