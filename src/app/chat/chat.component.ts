import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['app/chat/chat.component.css'],
    providers: [AuthService]
})

export class ChatComponent {
    items: FirebaseListObservable<any[]>;
    message: string;
    constructor(public af: AngularFire) {
        this.items = af.database.list('/channels/channel1/messages/',  {
          query: {
            orderByKey: false
          }});
    }

    onSendMessage(){
        this.items.push({
            text: this.message
        });
    }
}