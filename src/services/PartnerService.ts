import { getRepository } from 'typeorm';
import PartnerModel from '../models/partner';


class PartnerService {
    public async create({type_service, user_id}: any): Promise<any> {
        const repository = getRepository(PartnerModel);

        // console.log(emp);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const user = repository.create({type_service, user_id});

        await repository.save(user);

        return user;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(PartnerModel);
        await repository.delete(id);

        return true;
    }
    // public async update({type_service, user_id}, id: any): Promise<any> {

    //     const repository = getRepository(PartnerModel);
    //     await repository.update(id, user);

    //     return true;
    // }
    public async get(id: any): Promise<any> {
        const repository = getRepository(PartnerModel);

        if (id)
            return await repository.findOne(id);

        return await repository.find();
    }
}
export default PartnerService;