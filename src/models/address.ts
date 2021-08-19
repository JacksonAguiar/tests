import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn, UsingJoinColumnIsNotAllowedError } from 'typeorm';
import InsuranceCompanieModel from './insuranceCompanie';
import UserModel from './user';

@Entity({ name:'addresses'})
class AddressModel {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    zipcode: string;

    @Column()
    address: string;

    @Column()
    number: string;

    @Column()
    additional: string;

    @Column()
    district: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    // @OneToOne(() => UserModel)
    // user: UserModel;
    
    // @OneToOne(() => InsuranceCompanieModel)
    // insuranceCompanie: InsuranceCompanieModel;

}
export default AddressModel;