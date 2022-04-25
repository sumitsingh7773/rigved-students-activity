import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
users: any | undefined=undefined;
  constructor(private _service:UserService) { }

  ngOnInit(): void {
  }
  _id=new FormControl('')
  handleGet(id:number){
    console.log(id)
    this._service.deleteUser(id).subscribe((d)=>{
      this.users=d;
    })

}
}