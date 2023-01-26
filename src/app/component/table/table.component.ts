import { Component } from '@angular/core';
import { DummyJsonService } from 'src/app/services/dummy-json.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  users: any;

  constructor(private usersData: DummyJsonService) {
    this.usersData.user().subscribe((data: any) => {
      console.log(data.users, 'user data');
      this.users = data.users;
    });
  }

}
