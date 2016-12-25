import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';


@Injectable()
export class AuthService {
	public user = {};
	constructor(public af: AngularFire) {
	    this.af.auth.subscribe(_user => {
	        if(_user) {
	        // user logged in
	            this.user = _user;
	        } 
	        else 

	        {
	        	// user not logged in
	            this.user = {};
	        }
	    });
	}

	getUser() {
		return this.user;
	}
}