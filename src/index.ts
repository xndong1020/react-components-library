import { Observable } from "windowed-observable";
import Button from "./components/Button/Button";
import Input from "./components/FormInput/Input";

const observable = new Observable("messages");

export interface Message {
  action: string;
  payload: {
    data: string;
  };
}

export { Button, Input, observable as GlobalObservable };
