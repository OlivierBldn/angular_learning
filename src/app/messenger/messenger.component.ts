import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from '../send-message.component'
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { ParseLinkPipe } from "../parse-link.pipe";
import { Message } from '../interfaces/message.interface';

@Component({
  selector: 'app-messenger',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1}))
      ])
    ])
  ],
  imports: [
    CommonModule,
    FormsModule,
    SendMessageComponent,
    ParseLinkPipe
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
  loggedIn : boolean = false;

  messages : Message[] = [];

  username = "";

  http = inject(HttpClient);

  constructor() {
    fromEvent(window , 'storage').subscribe((event) => {
      let messages = localStorage.getItem('messages');

      if(messages) {
        let parsedMessages = JSON.parse(messages);
        this.messages = parsedMessages
      }
    })
  }

  send(message : string) {
    if(this.username) {
      this.messages.push({
        username : this.username,
        datetime : new Date(),
        content : message,
      });
      localStorage.setItem('messages', JSON.stringify(this.messages))
    }
  }

  login() {
    if (this.username) {
      this.loggedIn = true;
    }
  }
}