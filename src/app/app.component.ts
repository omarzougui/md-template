import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linksNav1=[
      {item:'Inbox',logo:'inbox'},
      {item:'Start',logo:'start'},
      {item:'Sent Mail',logo:'send'}
    ];
  linksNav2=[
      {item:'Draft',logo:'drafts'},
      {item:'All Mail',logo:'email'},
      {item:'Trash',logo:'delete'},
      {item:'Spam',logo:'report'}
    ];
}
