import { getRepository } from 'typeorm';
import VehicleModel from '../models/vehicle';

class VehicleService {
    public async create(newVehicle: VehicleObject): Promise<any> {
        const repository = getRepository(VehicleModel);

        // console.log(emp);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const user = repository.create(newVehicle);

        await repository.save(user);

        return user;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(VehicleModel);
        await repository.delete(id);

        return true;
    }
    public async update(vehicle: VehicleObject, id: any): Promise<any> {

        const repository = getRepository(VehicleModel);
        await repository.update(id, vehicle);

        return true;
    }
    public async get(id: any): Promise<any> {
        const repository = getRepository(VehicleModel);

        if (id)
            return await repository.findOne(id);

        return await repository.find();
    }
}
export default VehicleService;