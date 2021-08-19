import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVehicle1629209046485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'vehicles',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'manufacturer',
                    type: 'varchar',
                },
                {
                    name: 'model',
                    type: 'varchar',
                },
                {
                    name: 'year',
                    type: 'integer',
                },
                {
                    name: 'color',
                    type: 'varchar',
                },
                {
                    name: 'plate',
                    type: 'varchar',
                },
                {
                    name: 'car_chassis',
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

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles');
    }

}
