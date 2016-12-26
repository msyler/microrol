import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['app/header/header.component.css'],
  providers: [AuthService]
})

export class HeaderComponent {
  @Output() onLogged = new EventEmitter<boolean>();
  
  isLogged = false;
  user = {};

  constructor(public af: AngularFire, private authservice: AuthService) {
    this.af.auth.subscribe(_user => {
	        if(_user) {
	            // user logged in
	        	  this.isLogged = true;
	            this.user = _user;
	            console.log('logged!');
              this.onLogged.emit(true);
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