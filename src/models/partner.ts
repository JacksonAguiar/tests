import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserModel from "./user";

@Entity({ name:'partners'})
class PartnerModel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    type_service: string;
    
    @Column()
    user_id: string;
    
    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

    @OneToOne(() => UserModel, {eager:true})
    @JoinColumn({ name:"user_id"})
    user: UserModel;
}
export default PartnerModel;