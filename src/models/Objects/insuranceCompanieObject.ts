class InsuranceCompanieObject {
  
    ie: string;
    contact: string;
    cnpj: string;
    social_reason: string;
    address_id: string;

    constructor({ie, contact, cnpj, social_reason, address_id}:any){
            this.ie = ie;
            this.contact = contact;
            this.social_reason = social_reason;
            this.cnpj = cnpj;
            this.address_id = address_id;
    }

}