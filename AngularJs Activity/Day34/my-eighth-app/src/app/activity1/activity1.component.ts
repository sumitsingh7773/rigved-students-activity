import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  first: string ='';
  last:string='';
  gndr:string='';
  skl:string='';
  qua:string='';
  adr:string='';

  handleSubmit(formValue: any):void{
    console.log(formValue);
    this.first=formValue.fn;
    this.last=formValue.ln;
    this.gndr=formValue.gndr;
    this.skl=formValue.skl;
    this.qua=formValue.qua;
    this.adr=formValue.adr;
 
}
}
