
class APIresponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;      
    }

    // constructor(statusCode, status, message = "Success", data = null) {
    //     this.statusCode = statusCode;
    //     this.status = status;
    //     this.message = message;
    //     this.data = data;
    // }
}

export { APIresponse };
