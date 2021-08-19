import AddressObject from "../models/Objects/addressObject";
import AddressService from "../services/AddressService";

class AddressController {
    static async create(request: any, response: any){
        try {
            const body = new AddressObject(request.body);
            const addressService = new AddressService();
            const address = await addressService.create(body);
            return response.json(address);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async update(request: any, response: any){
        try {
            const body = new AddressObject(request.body);
            const {id} =request.params;
            const addressService = new AddressService();
            const address = await addressService.update(body, id);
            return response.json(address);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }

}