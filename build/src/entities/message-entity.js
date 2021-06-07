"use strict";
class Message {
}
Message.bodyNotProvided = () => `the 'body' request doesn't contain a valid data.`;
Message.unauthorized = () => `Unauthorized`;
Message.tokenNotValid = () => `Token is not valid or has been expired`;
Message.loginInvalid = () => `invalid dni or password.`;
Message.generalError = () => "Somenthing went wrong. Please try again";
module.exports = { Message };
