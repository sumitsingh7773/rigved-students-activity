import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-demo',
  templateUrl: './employee-demo.component.html',
  styleUrls: ['./employee-demo.component.css']
})
export class EmployeeDemoComponent implements OnInit {
  name: string="Ajay";
  id: number=100;
  salary:number=45200
 
  constructor() { }

  ngOnInit(): void {
  }
}
