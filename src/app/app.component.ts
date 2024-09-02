import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { USER_LIST } from './user/user-list';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root', // this is used as html element
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-project';
  users = USER_LIST;
}
