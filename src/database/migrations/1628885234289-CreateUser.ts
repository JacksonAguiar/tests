import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClient1628885234289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'cpf_cnpj',
                        type: 'varchar'
                    },
                    {
                        name: 'cell_phone',
                        type: 'varchar'
                    },
                    {
                        name: 'landline',
                        type: 'varchar'
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name: 'address_id',
                        type: 'varchar',
                        isNullable:true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default:'now()'
                    },
                ]
            })
        );
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey({
                name:'addressUser',
                columnNames: ['address_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'addresses',
                onDelete: 'CASCADE',
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.dropForeignKey('users', 'addressUser');
    }

}
