import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
firstname:string |undefined=undefined;
lastname:string |undefined=undefined;
 array:Array<{fn:string,ln:string}>=[]
 save(fn:string,ln:string):void{
   this.firstname=fn;
   this.lastname=ln;
   let Userobject={fn:this.firstname,ln:this.lastname}
   this.array.push(Userobject)
}
}
