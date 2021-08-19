import VehicleService from "../services/VehicleService";

class VehicleController {
    static async create(request: any, response: any) {
        try {
            const body = new VehicleObject(request.body);
            const vehicleService = new VehicleService();
            const vehicle = await vehicleService.create(body);
            return response.json(vehicle);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async update(request: any, response: any) {
        try {
            const body = new VehicleObject(request.body);
            const { id } = request.params;
            const vehicleService = new VehicleService();
            const vehicle = await vehicleService.update(body, id);
            return response.json(vehicle);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async delete(request: any, response: any) {
        try {
            const { id } = request.params;
            const vehicleService = new VehicleService();
            const vehicle = await vehicleService.delete(id);
            return response.json(vehicle);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
    static async get(request: any, response: any) {
        try {
            const { id } = request.params;
            const vehicleService = new VehicleService();
            const vehicle = await vehicleService.get(id);
            return response.json(vehicle);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export default VehicleController;