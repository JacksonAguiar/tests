
import EmployeeService from "../services/EmployeeService";

class EmployeeController {
    static async create(request: any, response: any){
        try {
            const body = new EmployeeObject(request.body);
            const employeeService = new EmployeeService();
            console.table(body);
            const employee = await employeeService.create(body);
            return response.json(employee);
            // return response.status(200);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async update(request: any, response: any){
        try {
            const body = new EmployeeObject(request.body);
            const {id} = request.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.update(body, id);
            return response.json(employee);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async delete(request: any, response: any){
        try {
            const {id} = request.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.delete(id);
            return response.json(employee);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
    static async get(request: any, response: any){
        try {
            const {id} = request.params;
            const employeeService = new EmployeeService();
            const employee = await employeeService.get(id);
            return response.json(employee);
        } catch (err) {
            return response.status(400).json({error: err.message});
        }
    }
}
export default EmployeeController;