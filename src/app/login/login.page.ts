import { Component, NgZone, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) {}

  ngOnInit() {}

  async login() {
    try {
      const user = await this.ngFireAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      console.log(user);

      if (user.user.email) {
        this.router.navigateByUrl('tabs');
      } else {
        alert('login failed!');
      }
    } catch (e) {
      console.log(e);
    }
  }

  async register() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
    console.log(user);

    if (user.user.email) {
      alert('registration successful');
    } else {
      alert('registration failed!');
    }
  }
}
