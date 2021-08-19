
import CarPartObject from "../models/Objects/carPartsObject";
import CarPartService from "../services/CarPartService";

class CarPartController {
    static async create(request: any, response: any){
        try {
            const body = new CarPartObject(request.body);
            const carPartService = new CarPartService();
            console.table(body);
            const carPart = await carPartService.create(body);
            return response.json(carPart);
            // return response.status(200);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async update(request: any, response: any){
        try {
            const body = new CarPartObject(request.body);
            const {id} = request.params;
            const carPartService = new CarPartService();
            const carPart = await carPartService.update(body, id);
            return response.json(carPart);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async delete(request: any, response: any){
        try {
            const {id} = request.params;
            const carPartService = new CarPartService();
            const carPart = await carPartService.delete(id);
            return response.json(carPart);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async get(request: any, response: any){
        try {
            const {id} = request.params;
            const carPartService = new CarPartService();
            const carPart = await carPartService.get(id);
            return response.json(carPart);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
}
export default CarPartController;