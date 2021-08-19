class UserObject {
    email: string;
    name: string;
    cpf_cnpj: string;
    cell_phone: string;
    landline: string;
    type: string;
    address_id: string;
    constructor({ name, email, cpf_cnpj, cell_phone, landline, type,address_id }: any) {
        this.name = name;
        this.email = email;
        this.cpf_cnpj = cpf_cnpj;
        this.cell_phone = cell_phone;
        this.landline = landline;
        this.type = type;
        this.address_id = address_id;
    }
}