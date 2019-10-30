export class Forms {
    constructor(parseForms) {

        this.formId = parseForms.id;
        this.fname = parseForms.get("fname");
        this.lname = parseForms.get("lname");
        this.mobile = parseForms.get("mobile");
        this.email = parseForms.get("email");

        this.ctType_isPanoramic = parseForms.get("ctType_isPanoramic");
        this.ctType_isStatus = parseForms.get("ctType_isStatus");
        this.ctType_isStatusParallel = parseForms.get("ctType_isStatusParallel");

        this.ortho_cephalometric_side = parseForms.get("ortho_cephalometric_side"); // will contain list of form all id's forms each md created
        this.ortho_computerized_tomography = parseForms.get("ortho_computerized_tomography");
        this.ortho_diagnostic_setup = parseForms.get("ortho_diagnostic_setup");
        this.orth_facial_type = parseForms.get("orth_facial_type");

        // this.periafical_ct_upper_Left = parseForms.get("periafical_ct_upper_Left");
        // this.periafical_ct_upper_Right = parseForms.get("periafical_ct_upper_Right");
        // this.periafical_ct_lower_Left = parseForms.get("periafical_ct_lower_Left");
        // this.periafical_ct_lower_Right = parseForms.get("periafical_ct_lower_Right");



    }
}
