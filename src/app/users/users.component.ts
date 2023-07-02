import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Ramu'
    },
    {
      id: 2,
      name: 'Sita'
    },
    {
      id: 3,
      name: 'Ganesh'
    }
  ];
}
