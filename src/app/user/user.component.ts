import { Component, Input, computed, signal } from '@angular/core';
import { USER_LIST } from './user-list';

const randomNumber = Math.floor(Math.random() * USER_LIST.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // userList = USER_LIST[randomNumber];
  // userList = signal(USER_LIST[randomNumber]);

  // () => './users/' + this.userList().avatar - take no arguments and return the string
  // imagePath = computed(() => './users/' + this.userList().avatar);
  // get imagePath() {
  //   return './users/' + this.userList.avatar;
  // }
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return './users/' + this.avatar;
  }

  userClick() {
    // console.log('userClick');
  }
}
