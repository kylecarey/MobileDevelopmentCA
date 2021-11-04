import { Component } from '@angular/core';

const config = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCA9TG1-rwGQ0KlQ-NV2eaykGxtdlVW_Vo",
    authDomain: "whattodo-55561.firebaseapp.com",
    projectId: "whattodo-55561",
    storageBucket: "whattodo-55561.appspot.com",
    messagingSenderId: "769721329031",
    appId: "1:769721329031:web:d931977d3abd1318fa1f22",
    measurementId: "G-3343L19MNL"
  }
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
