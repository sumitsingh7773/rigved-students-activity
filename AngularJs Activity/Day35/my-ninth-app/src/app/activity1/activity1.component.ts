import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname = new FormControl('');
  lastname  = new FormControl('');
}
