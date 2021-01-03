import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  error = "";
  constructor(
    private router :Router,
    private firebaseAuth :AngularFireAuth
    
    ) { 
    
  }
  login(username:string, password:string){
    this.firebaseAuth.signInWithEmailAndPassword(username, password)
    .then(
      (credential) => {
       console.log(username);
       
         var index = username.indexOf("@")
      
       this.router.navigate(['chat', username.slice(0,index)])
      }
    ) 
    .catch((err) =>{
      this.error = err.message || 'unknown error'
    }
    )
  }
}
