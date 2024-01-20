import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Е.Популова',
      subject: 'Былина',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Добрыня Никитич',
      subject: 'Сказка',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Василий Буслаев',
      subject: 'Рассказ',
      date: '4:55 AM',
      id: 2,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
