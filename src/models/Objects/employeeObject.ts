class EmployeeObject {
    name: string;
    email: string;
    position: string;
    password: string;

    constructor({name,email,position,password}:any) {
        this.name = name;
        this.email = email;
        this.position = position;
        this.password = password;
    }
}