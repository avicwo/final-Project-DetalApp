export default class Leads {
    constructor(parseLeads) {
        this.id = parseLeads.id;
        this.fname = parseLeads.get("fname");
        this.lname = parseLeads.get("lname");
        this.email = parseLeads.get("email");
    }
}