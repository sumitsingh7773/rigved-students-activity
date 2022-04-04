import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
})
export class UserDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   users = [
    {name : "Alex", gender : "male", address: {state: "KA", city : "BLR"}},
    {name : "Jennifer", gender : "female", address: {state: "MH", city : "MBI"}},
    {name : "Zaheer", gender : "male", address : {state : "TN", city : "CHN"}},
    {name : "Sumit", gender : "male", address: {state: "BR", city : "PTA"}},
    {name : "Ritu", gender : "female", address : {state : "BR", city : "PTA"}},
    {name : "Vishal", gender : "male", address : {state : "BR", city : "PTA"}}
    
    ];
    
}