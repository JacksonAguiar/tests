import AddressObject from "../models/Objects/addressObject";
import AddressService from "../services/AddressService";
import UserService from "../services/UserService";

class UserController {
    static async create(request: any, response: any) {
        try {
            const userObj = new UserObject(request.body);
            const addressObj = new AddressObject(request.body);
            
            const userService = new UserService();
            const addressService = new AddressService();

            const address: any = addressService.create(addressObj);
            
            userObj.address_id = address.id;
            const user = await userService.create(userObj);
            
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async update(request: any, response: any) {
        try {
            const body = new UserObject(request.body);
            const { id } = request.params;
            const userService = new UserService();
            const user = await userService.update(body, id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async delete(request: any, response: any) {
        try {
            const { id } = request.params;
            const userService = new UserService();
            const user = await userService.delete(id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async get(request: any, response: any) {
        try {
            const { id } = request.params;
            const userService = new UserService();
            const user = await userService.get(id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export default UserController;