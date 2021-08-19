import { getRepository } from 'typeorm';
import EmployeeModel from '../models/employee';

class EmployeeService {
    public async create(emp: EmployeeObject): Promise<any> {
        const repository = getRepository(EmployeeModel);

        console.log(emp);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const employee = repository.create(emp);

        await repository.save(employee);

        return employee;
    }
    public async update(emp: EmployeeObject, id: any): Promise<any> {

        const repository = getRepository(EmployeeModel);
        await repository.update(id, emp);

        return true;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(EmployeeModel);
        await repository.delete(id);

        return true;
    }
    public async get(id: any): Promise<any> {
        const repository = getRepository(EmployeeModel);

        if (id)
            return await repository.findOne(id);

        return await repository.find();
    }
}
export default EmployeeService;