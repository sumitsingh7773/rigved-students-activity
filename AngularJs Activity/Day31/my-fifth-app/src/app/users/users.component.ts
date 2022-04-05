import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
users : any =[
  {name:"Alexender",gender:"Male",address:{state:"KA",city:"BLR"}},
  {name:"Sony",gender:"Female",address:{state:"MH",city:"MBI"}},
  {name:"Raj",gender:"Male",address:{state:"MH",city:"PUN"}},
  {name:"Bruce",gender:"Male",address:{state:"KA",city:"BLR"}},
  {name:"Anchit",gender:"Male",address:{state:"BR",city:"PAT"}},
  {name:"Sumit",gender:"Male",address:{state:"BR",city:"PAT"}},
  {name:"Shreya",gender:"Female",address:{state:"DL",city:"NDL"}},
  {name:"Susmita",gender:"Female",address:{state:"BR",city:"MFP"}},
]
}
