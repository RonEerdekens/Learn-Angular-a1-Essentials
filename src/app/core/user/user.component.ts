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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
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
