export  class UserMd {
    constructor(parseUser) {
        this.id = parseUser.id;
        this.fname = parseUser.get("fname");
        this.lname = parseUser.get("lname");
        this.mobile = parseUser.get("mobile");
        this.email = parseUser.get("email");
        this.adress = parseUser.get("adress");
        this.forms = parseUser.get("forms"); 
        this.expertise = parseUser.get("expertise");
        this.isAdmin = parseUser.get("isAdmin");
        this.isActiveDoctor = parseUser.get("isActiveDoctor");
    }
}
