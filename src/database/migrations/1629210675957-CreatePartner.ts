import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePartner1629210675957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'partners',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'service_type',
                    type: 'varchar',
                },
                {
                    name: 'user_id',
                    type: 'varchar',
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
                }
            ]
        }))
        await queryRunner.createForeignKey(
            'partners',
            new TableForeignKey({
                name:'partnersUser',
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('partners');
        await queryRunner.dropForeignKey('partners','partnersUser');
    }

}
