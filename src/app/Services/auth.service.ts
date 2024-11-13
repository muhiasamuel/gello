import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // sign in with email/password
  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  // Register new user
  register(email:string,password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  // Sign out
  logout(){
    return this.afAuth.signOut();
  }

  // sign in with Google
  googleSignIn(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Get the current user
  getuser(){
    return this.afAuth.authState
  }
}
