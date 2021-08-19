import { Router } from 'express';
import CarPartController from '../controllers/CarPartController';
import EmployeeController from '../controllers/EmployeeController';
import InsuranceCompanieController from '../controllers/InsuranceCompanieController';
import UserController from '../controllers/UserController';
import VehicleController from '../controllers/VehicleController';

const routes = Router();

routes.get("/", (req, res)=>{
    res.send({"response":"Api working on port 3333"})
});

routes.post("/employee", EmployeeController.create);
routes.get("/employee/:id?", EmployeeController.get);
routes.delete("/employee/:id", EmployeeController.delete);
routes.put("/employee/:id", EmployeeController.update);

routes.post("/user", UserController.create);
routes.get("/user/:type?&:id?", UserController.get);
routes.delete("/user/:id", UserController.delete);
routes.put("/user/:id", UserController.update);

routes.post("/vehicle", VehicleController.create);
routes.get("/vehicle/:id?", VehicleController.get);
routes.delete("/vehicle/:id", VehicleController.delete);
routes.put("/vehicle/:id", VehicleController.update);

routes.post("/inscompanie", InsuranceCompanieController.create);
routes.get("/inscompanie/:id?", InsuranceCompanieController.get);
routes.delete("/inscompanie/:id", InsuranceCompanieController.delete);
routes.put("/inscompanie/:id", InsuranceCompanieController.update);

routes.post("/carpart", CarPartController.create);
routes.get("/carpart/:id?", CarPartController.get);
routes.delete("/carpart/:id", CarPartController.delete);
routes.put("/carpart/:id", CarPartController.update);

export default routes;