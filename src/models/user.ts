import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import AddressModel from './address';

@Entity({ name:'users'})
class UserModel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    cell_phone: string;

    @Column()
    landline: string;

    @Column()
    type: string;

    @Column()
    address_id: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;
 

    @OneToOne(() => AddressModel, { eager: true })
    @JoinColumn({ name: "address_id" })
    address: AddressModel;


}
export default UserModel;