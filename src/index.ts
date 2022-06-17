import { Observable } from "windowed-observable";
import Button from "./components/Button/Button";
import Input from "./components/FormInput/Input";

export const globalObservable = new Observable("messages");

export { Button, Input };
