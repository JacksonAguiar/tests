import { getRepository } from 'typeorm';
import InsuranceCompanieModel from '../models/insuranceCompanie';

class InsuranceCompanieService {
    public async create(ic: InsuranceCompanieObject): Promise<any> {
        const repository = getRepository(InsuranceCompanieModel);

        console.log(ic);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const employee = repository.create(ic);

        await repository.save(employee);

        return employee;
    }
    public async update(ic: InsuranceCompanieObject, id: any): Promise<any> {

        const repository = getRepository(InsuranceCompanieModel);
        await repository.update(id, ic);

        return true;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(InsuranceCompanieModel);
        await repository.delete(id);

        return true;
    }
    public async get(id: any): Promise<any> {
        const repository = getRepository(InsuranceCompanieModel);

        if (id)
            return await repository.findOne(id, {relations: ["addresses"]});

        return await repository.find();
    }
}
export default InsuranceCompanieService;