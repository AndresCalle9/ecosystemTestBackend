class Message {
    
    static bodyNotProvided = () =>
      `the 'body' request doesn't contain a valid data.`;
    static unauthorized = () => `Unauthorized`;
    static tokenNotValid = () => `Token is not valid or has been expired`;
    static loginInvalid = () => `invalid dni or password.`;
    static generalError = () => "Somenthin went wrong. Please try again";
  }
  
  module.exports = { Message };