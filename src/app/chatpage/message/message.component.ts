import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-messsage.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  
  @Input() chatMessage :ChatMessage;
  userEmail:string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  // isOwnMessage : boolean;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName= chatMessage.userName;
  }

}
