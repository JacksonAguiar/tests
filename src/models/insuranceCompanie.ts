import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import AddressModel from "./address";


@Entity({ name:'insuranceCompanies'})
class InsuranceCompanieModel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    ie: string;

    @Column()
    contact: string;

    @Column()
    cnpj: string;

    @Column()
    social_reason: string;
   
    @Column()
    address_id: string;

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

    @OneToOne(() => AddressModel, { eager: true })
    @JoinColumn({ name: "address_id" })
    address: AddressModel;
}
export default InsuranceCompanieModel;