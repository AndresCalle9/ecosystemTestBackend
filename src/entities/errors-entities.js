class Unauthorize extends Error {
    constructor(error) {
      super(error);
  
      this.data = { error };
      this.statusCode = 401;
    }
  }

  class Conflict extends Error {
    constructor(error) {
      super(error);
  
      this.data = { error };
      this.statusCode = 409;
    }
  }

module.exports = { Unauthorize, Conflict};
