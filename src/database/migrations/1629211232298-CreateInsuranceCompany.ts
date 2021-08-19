import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateInsuranceCompany1629211232298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'insuranceCompanies',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        isUnique:true

                    },
                    {
                        name: 'ie',
                        type: 'varchar',
                    },
                    {
                        name: 'contact',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar'
                    },
                    {
                        name: 'social_reason',
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
            'insuranceCompanies',
            new TableForeignKey({
                name:'addressCompanie',
                columnNames: ['address_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'addresses',
                onDelete: 'CASCADE',
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('insuranceCompanies');
        await queryRunner.dropForeignKey('insuranceCompanies', 'addressCompanie');
    }

}
