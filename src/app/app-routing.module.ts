import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import {MessagesComponent} from './messages/messages.component';
const routes: Routes = [
    {
      path :'login', 
      component: LoginComponent
    },
    {
      path :'chat/:email',
       component :ChatComponent
    },
    {
      path :"chat/:email/:group/messages",
      component: MessagesComponent
    },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
