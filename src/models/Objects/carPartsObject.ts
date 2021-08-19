
class CarPartObject {

    cod: string;
    description: string;
    value: Number;
    paid_value: Number;

    constructor({ cod, description, value, paid_value }: any) {
        this.cod = cod;
        this.description = description;
        this.value = value;
        this.paid_value = paid_value;
    }

}
export default CarPartObject;