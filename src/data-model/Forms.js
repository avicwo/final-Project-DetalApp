export class Forms {
    constructor(parseForms) {
        this.formId = parseForms.formId;
        this.fname = parseForms.get("fname");
        this.lname = parseForms.get("lname");
        this.mobile = parseForms.get("mobile");
        this.email = parseForms.get("email");
        this.ctType = parseForms.get("ctType");
        this.ortho_cephalometric_side = parseForms.get("ortho_cephalometric_side"); // will contain list of form all id's forms each md created
        this.ortho_computerized_tomography = parseForms.get("ortho_computerized_tomography");
        this.ortho_diagnostic_setup = parseForms.get("ortho_diagnostic_setup");
        this.orth_facial_type = parseForms.get("orth_facial_type");
    }
}
