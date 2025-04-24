// class APIerror extends Error {
//     constructor(
//         statuscode, 
//         message = "Something went wrong!!",
//         errors = [],
//         stack = ""
//     ) {
//         super(message)
//         this.statusCode = statusCode;
//         this.data = null;
//         this.message = message;
//         this.success = false;
//         this.errors = errors;

//         if (stack) {
//             this.stack = stack;
//         } else {
//             Error.captureStackTrace(this, this.constructor);
//         }
//     }
// }

// export { APIerror };


class APIerror extends Error {
    constructor(
        statusCode = 500,  // ✅ Capital "C" to match usage
        message = "Something went wrong!!",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode; // ✅ Correct casing
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { APIerror };
