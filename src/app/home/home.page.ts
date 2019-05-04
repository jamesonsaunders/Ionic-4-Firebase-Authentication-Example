import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hasVerifiedEmail = true;
  sentTimestamp;

  constructor(public afAuth: AngularFireAuth,) {

    this.afAuth.authState.subscribe(user => {
      if (user)
        this.hasVerifiedEmail = this.afAuth.auth.currentUser.emailVerified;
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  sendVerificationEmail() {
    this.afAuth.auth.currentUser.sendEmailVerification();
    this.sentTimestamp = new Date();
  }

  reload() {
    window.location.reload();
  }
}
