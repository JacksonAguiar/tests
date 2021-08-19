import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCarPart1629296620210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'carParts',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'cod',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'integer'
                    },
                    {
                        name: 'paid_value',
                        type: 'integer'
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

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('carParts');
    }
}
