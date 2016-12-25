import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['app/header/header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent {
  items: FirebaseListObservable<any[]>;
  isLogged = false;
  user = {};
  constructor(public af: AngularFire, private authservice: AuthService) {
    


    this.af.auth.subscribe(_user => {
	        if(_user) {
	        // user logged in
	        	this.isLogged = true;
	            this.user = _user;
	            console.log('logged!');
	            this.items = af.database.list('/channels/channel1');
	        } else {
	        	// user not logged in
	        	this.isLogged = false;
	            this.user = {};
	            console.log('Not Logged');
	        }
	    });
  }
  login() {
    this.af.auth.login();
  }

  logout() {
  	this.isLogged = false;
	this.user = {};
    this.af.auth.logout();
  }
}