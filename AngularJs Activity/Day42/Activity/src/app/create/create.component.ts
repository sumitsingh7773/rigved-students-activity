import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _service: UserService,private _builder:FormBuilder) { }

  ngOnInit(): void {
  }
  //success response on store
  users : any | undefined = undefined;
  //create a form that will have 3 form control _id,name,age
  userForm : FormGroup = this._builder.group({
    _id:[],name:[],age:[]
  });
  handleSubmit(){
    this._service.createUser(this.userForm.value).subscribe((data)=>{
      this.users = data;
    },(errors)=>{
      console.log(errors?.error?.message);
    })
  }
}