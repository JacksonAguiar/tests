class VehicleObject {
    manufacturer: string;
    model: string;
    year: Number;
    color: string;
    plate: string;
    car_chassis: string;

    constructor({manufacturer, model, year, color, plate, car_chassis}:any){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.color = color;
        this.plate = plate;
        this.car_chassis = car_chassis;
    }
}