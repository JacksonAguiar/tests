import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'vehicles' })
class VehicleModel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    manufacturer: string;

    @Column()
    model: string;

    @Column()
    year: Number;

    @Column()
    color: string;

    @Column()
    plate: string;

    @Column()
    car_chassis: string;

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}
export default VehicleModel;