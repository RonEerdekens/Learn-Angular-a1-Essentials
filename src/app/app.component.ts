import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { UserComponent } from './core/user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './core/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Essentials';
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
