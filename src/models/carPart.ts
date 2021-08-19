import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name:'carParts'})
class CarPartModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;
   
    @Column()
    cod: string;
    
    @Column()
    description: string;
    
    @Column()
    value: Number;

    @Column()
    paid_value: Number;
    
    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}
export default CarPartModel;