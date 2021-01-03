import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}  from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  group = ''
  name :''
  messages :Observable <any>
  newMessage ="";
  
  send(){
  
    if(this.messages){
      const message = this.firebase.list('messages')

      message.push({
        name : this.name,
        id:  Math.random().toString(36).substr(2, 9),
        group : this.group,
        text : this.newMessage
      } )
    }
    this.newMessage = ''
  }
  delete(){
    
    const message = this.firebase.list('messages')

    message.remove()
    // messages.filter(message => )
  }
  constructor(private route : ActivatedRoute
    ,private firebase : AngularFireDatabase,private firebaseAuth :AngularFireAuth
    ) { }

  ngOnInit(){
    this.route.params.subscribe((params=>{
      this.name = params.email ;
      this.group = params.group;
      if(this.group){
        this.messages = this.firebase
        .list("messages",ref => ref.orderByChild("group")
        .equalTo(this.group))
        .valueChanges()
      }

    }))
  }

}
