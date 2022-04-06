import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {Name:"Mobile",brand:["Vivo","Oppo","Redmi","Realme","oneplus1+","Moto"]},
    {Name:"Laptop",brand:["Lenovo","DELL","HP","Acer","Toshiba","Samsung"]}
  ];
}
