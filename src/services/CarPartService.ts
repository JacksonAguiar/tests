import { getRepository } from 'typeorm';
import CarPartModel from '../models/carPart';
import CarPartObject from '../models/Objects/carPartsObject';

class CarPartService {
    public async create(piece: CarPartObject): Promise<any> {
        const repository = getRepository(CarPartModel);

        console.log(piece);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const carPart = repository.create(piece);

        await repository.save(carPart);

        return carPart;
    }
    public async update(piece: CarPartObject, id: any): Promise<any> {

        const repository = getRepository(CarPartModel);
        await repository.update(id, piece);

        return true;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(CarPartModel);
        await repository.delete(id);

        return true;
    }
    public async get(id: any): Promise<any> {
        const repository = getRepository(CarPartModel);

        if (id)
            return await repository.findOne(id);

        return await repository.find();
    }
}
export default CarPartService;