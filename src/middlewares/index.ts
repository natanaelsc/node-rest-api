import Codes from "./codes";
import Messages from "./messages";
import ResponseHandler from "./responses";

const responses = new ResponseHandler();
const messages = new Messages();
const codes = new Codes();

export const middlewares = {
  responses,
  messages,
  codes,
};