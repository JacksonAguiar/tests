import { getRepository } from 'typeorm';
import UserModel from '../models/user';

class UserService {
    public async create(newUser: UserObject): Promise<any> {
        const repository = getRepository(UserModel);

        // console.log(emp);
        // if (!user) {
        //     throw Error("User not found");
        // }

        const user = repository.create(newUser);

        await repository.save(user);

        return user;
    }
    public async delete(id: any): Promise<any> {
        const repository = getRepository(UserModel);
        await repository.delete(id);

        return true;
    }
    public async update(user: UserObject, id: any): Promise<any> {

        const repository = getRepository(UserModel);
        await repository.update(id, user);

        return true;
    }
    public async get(id: any): Promise<any> {
        const repository = getRepository(UserModel);

        if (id)
            return await repository.findOne(id,{relations: ["addresses"]});

        return await repository.find();
    }
}
export default UserService;