import { getRepository } from 'typeorm';
import AddressModel from '../models/address';
import AddressObject from '../models/Objects/addressObject';

class AddressService {
    public async create(newAddress: AddressObject): Promise<any> {
        const repository = getRepository(AddressModel);

        // console.log(newAddress);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const address = repository.create(newAddress);

        await repository.save(address);

        return address;
    }
    public async update(upAddress: AddressObject, id: any): Promise<any> {

        const repository = getRepository(AddressModel);
        await repository.update(id, upAddress);

        return true;
    }
}
export default AddressService;