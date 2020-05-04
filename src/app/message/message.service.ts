import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() {}

  getMessages() {
    return this.messages;
  }

  addMsg(msg: string) {
    this.messages.push(msg);
  }

  clear() {
    this.messages = [];
  }

}