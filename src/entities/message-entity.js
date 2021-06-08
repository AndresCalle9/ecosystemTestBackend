class Message {
    
    static bodyNotProvided = () =>
      `the 'body' request doesn't contain a valid data.`;
    static unauthorized = () => `Unauthorized`;
    static tokenNotValid = () => `Token is not valid or has been expired`;
    static loginInvalid = () => `invalid dni or password.`;
    static generalError = () => "Somenthing went wrong. Please try again";
    static userExits = () => "The user already exits";
    static productExits = () => "The product already exits";

  }
  
  module.exports = { Message };