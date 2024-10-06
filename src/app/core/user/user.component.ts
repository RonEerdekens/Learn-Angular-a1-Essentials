import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { User } from './user.model';
import { NgClass } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  //select = output<String>();
  // avatar = input.required<String>();
  // name = input.required<String>();
  @Input({ required: true }) selected!: boolean;
  imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
