class AddressObject {
    zipcode: string;
    address: string;
    number: string;
    additional: string;
    district: string;
    city: string;
    state: string;
    user_id: string;

    constructor({ user_id, address, number, state,city,additional, district, zipcode }: any) {
        this.zipcode = zipcode;
        this.address = address;
        this.number = number;
        this.additional = additional;
        this.district = district;
        this.city = city;
        this.state = state;
        this.user_id = user_id;
    }
}
export default AddressObject;