class Unauthorize extends Error {
  data:string;
  statusCode:number;

    constructor(error:string) {
      super(error);
  
      this.data =  error ;
      this.statusCode = 401;
    }
  }

  class Conflict extends Error {
    data:string;
    statusCode:number;
    constructor(error:string) {
      super(error);
  
      this.data =  error ;
      this.statusCode = 409;
    }
  }

module.exports = { Unauthorize, Conflict};
