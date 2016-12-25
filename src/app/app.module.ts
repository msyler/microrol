import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDEqeUnxamLeafe8-lrjmwGCcRbMcaVftU',
  authDomain: 'microrol-ff0bd.firebaseapp.com',
  databaseURL: 'https://microrol-ff0bd.firebaseio.com/',
  storageBucket: '<your-storage-bucket>'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
