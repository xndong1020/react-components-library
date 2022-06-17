import Button from "./components/Button/Button";
import Input from "./components/FormInput/Input";
import { Observable } from "./observable";
import { Message } from "./types/types";

const observable = new Observable<Message>("messages");

export const LIBRARARY_NAME = "UILibrary";

export { Button, Input, Message, observable as GlobalObservable };
