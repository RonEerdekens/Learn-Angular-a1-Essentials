import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser: WritableSignal<any> = signal(DUMMY_USERS[randomIndex]);

  imagePath: Signal<String> = computed(
    () => 'assets/users/' + this.selectedUser().avatar
  );

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
