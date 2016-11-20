import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCKkz8_HeXaBeycLAvaVleSEO2beWjWmyM",
  authDomain: "af2-lists-27c30.firebaseapp.com",
  databaseURL: "https://af2-lists-27c30.firebaseio.com",
  storageBucket: "af2-lists-27c30.appspot.com",
  messagingSenderId: "784383944205"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
