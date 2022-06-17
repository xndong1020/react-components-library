import Button from "./components/Button/Button";
import Input from "./components/FormInput/Input";
import { Observable } from "./observable";

export interface Message {
  action: string;
  payload: {
    data: string;
  };
}

const observable = new Observable<Message>("messages");

export { Button, Input, observable as GlobalObservable };
