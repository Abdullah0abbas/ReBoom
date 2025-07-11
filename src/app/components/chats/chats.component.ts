import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class OwnerChatsComponent {
  chats = [
    { name: 'Sara', message: 'Is it available?', image: 'assets/users/user1.jpg' },
    { name: 'Ali', message: 'Price negotiable?', image: 'assets/users/user2.jpg' },
    { name: 'Lena', message: 'When can I get it?', image: 'assets/users/user3.jpg' },
    { name: 'Omar', message: 'Still for sale?', image: 'assets/users/user4.jpg' },
  ];
}
