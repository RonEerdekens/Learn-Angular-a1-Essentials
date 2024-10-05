import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
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
  @Input({ required: true }) id!: String;
  @Input({ required: true }) avatar!: String;
  @Input({ required: true }) name!: String;
  @Output() select = new EventEmitter<String>();
  //select = output<String>();
  // avatar = input.required<String>();
  // name = input.required<String>();
  imagePath() {
    return `assets/users/${this.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
