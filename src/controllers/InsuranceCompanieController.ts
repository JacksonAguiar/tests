import AddressObject from "../models/Objects/addressObject";
import AddressService from "../services/AddressService";
import InsuranceCompanieService from "../services/InsuranceCompanieService";


class InsuranceCompanieController {
    static async create(request: any, response: any) {
        try {
            const icObj = new InsuranceCompanieObject(request.body);
           
            const addressObj = new AddressObject(request.body);
            const addressService = new AddressService();
            const address: any = addressService.create(addressObj);
            
            icObj.address_id = address.id;
            
            const icService = new InsuranceCompanieService();
            const user = await icService.create(icObj);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async update(request: any, response: any) {
        try {
            const body = new InsuranceCompanieObject(request.body);
            const { id } = request.params;
            const icService = new InsuranceCompanieService();
            const user = await icService.update(body, id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async delete(request: any, response: any) {
        try {
            const { id } = request.params;
            const icService = new InsuranceCompanieService();
            const user = await icService.delete(id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async get(request: any, response: any) {
        try {
            const { id } = request.params;
            const icService = new InsuranceCompanieService();
            const user = await icService.get(id);
            return response.json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export default InsuranceCompanieController;