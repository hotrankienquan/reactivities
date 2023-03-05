import { makeAutoObservable } from "mobx";
// import { ServerError } from "../models/serverError";

interface ServerError {
  statusCode: number;
  message: string;
  details: string;
}
export default class CommonStore {
    error: ServerError | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setServerError(error: ServerError) {
        this.error = error;
    }
}