import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  users : any[] | undefined = undefined;
  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }
  handleClick() : void {
    this._service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}