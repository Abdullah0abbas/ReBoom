import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'Hey Alice', avatar: 'assets/images/alice.jpg' },
    { id: 2, name: 'Jon Dan', avatar: 'assets/images/jon.jpg' },
    { id: 3, name: 'Kathy Smith', avatar: 'assets/images/kathy.jpg' }
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: { name: string; avatar: string }) {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
