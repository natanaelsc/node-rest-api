import Codes from "./codes";
import Messages from "./messages";
import ResponseHandler from "./responses";

export const middlewares = {
  responses: new ResponseHandler(),
  messages: new Messages(),
  codes: new Codes(),
};