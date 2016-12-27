import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth.service';
import * as moment from 'moment/moment';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['app/chat/chat.component.css'],
    providers: [AuthService, AuthService]
})

export class ChatComponent {
    items: FirebaseListObservable<any[]>;
    message: string;
    constructor(public af: AngularFire, private authService: AuthService) {
        this.items = af.database.list('/channels/channel1/messages/',  {
          query: {
            orderByKey: false
          }});
    }

    onSendMessage(){
        this.items.push({
            text: this.message,
            sender: this.authService.getUser().auth.displayName,
            date: moment().format('DD/MM/YYYY HH:mm:ss')
        });
        this.message = '';
    }
}